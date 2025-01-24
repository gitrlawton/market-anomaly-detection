"use client";

import { useEffect, useState } from "react";
import StockTicker from "@/components/StockTicker";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import ChatBox from "@/components/ChatBox";
import AboutModal from "@/components/AboutModal";
import {
  growthInvestmentStrategies,
  defensiveInvestmentStrategies,
} from "@/utils/strategies";

export default function DashboardPage() {
  const [marketCondition, setMarketCondition] = useState("");
  const [approach, setApproach] = useState("balanced");

  useEffect(() => {
    const fetchMarketCondition = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/predict");
        if (!response.ok) {
          throw new Error("Failed to fetch marketCondition");
        }
        const data = await response.json();

        if (data.prediction === 0) {
          setMarketCondition("normal");
        } else if (data.prediction === 1) {
          setMarketCondition("anomalous");
        }
      } catch (error) {
        console.error("Error fetching market prediction:", error);
      }
    };

    fetchMarketCondition();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <StockTicker />
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold">
            <span className="text-green-500">Market</span>
            <span className="text-red-500">Pulse</span>
            <span className="text-gray-200"> - </span>
            <span className="text-[#daa520]">Market Anomaly Detector</span>
          </h1>
          <div className="ml-2">
            <AboutModal />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InvestmentStrategy
              condition={marketCondition}
              strategy={
                marketCondition === "normal"
                  ? growthInvestmentStrategies
                  : defensiveInvestmentStrategies
              }
              approach={approach} // Pass approach to InvestmentStrategy
              setApproach={setApproach} // Pass setter to update approach
            />
            <ChatBox
              marketCondition={marketCondition} // Pass marketCondition to ChatBox
              approach={approach} // Pass approach to ChatBox
            />
          </div>
        </div>
      </div>
    </div>
  );
}
