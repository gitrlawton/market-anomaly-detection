"use client";

import { useState } from "react";
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
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "You", text: input }]);
      // TODO: send the message to your backend and get a response
      // Just echo the message back for now
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            user: "AI",
            text: `You asked: "${input}". This is where the AI response would go.`,
          },
        ]);
      }, 500);
      setInput("");
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
        <ScrollArea className="h-[300px] w-full pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.user === "You" ? "text-right" : "text-left"}`}
            >
              <p className="font-bold text-gray-300">{message.user}</p>
              <p className="text-gray-400">{message.text}</p>
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
