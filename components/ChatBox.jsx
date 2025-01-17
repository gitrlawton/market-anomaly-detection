"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatBox() {
  // All the messages.
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi, how can I help you today?`,
    },
  ]);

  // The message we're typing in the text box.
  const [input, setInput] = useState("");

  // Create a ref for the scroll area viewport
  const scrollRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  };

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Dependency on messages ensures scroll on new message

  const handleSend = async () => {
    // Add user message to messages
    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput(""); // Clear input immediately

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessages),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Placeholder for AI response
      let aiResponse = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        aiResponse += chunk;

        // Update messages with streaming AI response
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          const lastMessageIndex = updatedMessages.length - 1;

          // Update or add AI message
          if (updatedMessages[lastMessageIndex].role === "assistant") {
            updatedMessages[lastMessageIndex] = {
              ...updatedMessages[lastMessageIndex],
              content: aiResponse,
            };
          } else {
            updatedMessages.push({
              role: "assistant",
              content: aiResponse,
            });
          }

          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, add an error message to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: `Error: ${error.message}` },
      ]);
    }
  };

  return (
    <Card className="w-full h-full bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-100">
          Chatbot
        </CardTitle>
        <p className="text-sm text-gray-400">
          Ask questions about the investment strategy
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4" ref={scrollRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
            >
              <p className="font-bold text-gray-300">
                {message.role === "user" ? "You" : "Assistant"}
              </p>
              <p className="text-gray-400">{message.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full space-x-2">
          <Input
            placeholder="Ask about the investment strategy..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-500"
          />
          <Button
            onClick={handleSend}
            // Disable the button if there's no input
            disabled={!input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
