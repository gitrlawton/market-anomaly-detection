import { Metadata } from "next";
import MarketGraph from "@/components/MarketGraph";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import ChatBox from "@/components/ChatBox";
import {
  marketData,
  marketCondition,
  investmentStrategy,
} from "@/utils/mockData";

export const metadata = {
  title: "Market Dashboard",
  description: "Real-time market analysis and investment strategies",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-4">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6">
          <MarketGraph data={marketData} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InvestmentStrategy
              condition={marketCondition}
              strategy={investmentStrategy[marketCondition]}
            />
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}
