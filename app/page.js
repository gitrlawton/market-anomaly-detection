import MarketBigBoard from "@/components/MarketBigBoard";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import ChatBox from "@/components/ChatBox";
import {
  marketData,
  marketCondition,
  investmentStrategy,
} from "@/utils/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-4">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6">
          <MarketBigBoard data={marketData} />
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
