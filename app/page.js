import StockTicker from "@/components/StockTicker";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import ChatBox from "@/components/ChatBox";
import AboutModal from "@/components/AboutModal";

import {
  marketData,
  marketCondition,
  growthInvestmentStrategies,
  defensiveInvestmentStrategies,
} from "@/utils/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <StockTicker />
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-[#daa520]">
            Market Anomaly Detector
          </h1>
          <div className="ml-2">
            <AboutModal />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InvestmentStrategy
              condition={marketCondition}
              strategy={growthInvestmentStrategies}
            />
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}
