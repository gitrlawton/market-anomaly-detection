import StockTicker from "@/components/StockTicker";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import ChatBox from "@/components/ChatBox";

import {
  marketData,
  marketCondition,
  investmentStrategy,
} from "@/utils/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <StockTicker />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-red-500 mt-6 mb-10">
          Market Anomaly Detected
        </h1>
        <div className="grid grid-cols-1 gap-6">
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
