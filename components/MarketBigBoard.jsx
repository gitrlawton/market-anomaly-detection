"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MarketBigBoard({ data }) {
  // Convert the data to include mock changes
  const marketData = Object.entries(data).map(([symbol, value]) => ({
    symbol,
    value,
    change: parseFloat((Math.random() * 2 - 1).toFixed(2)), // Random change between -1 and 1
  }));

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
        Market Anomaly Detected
      </h1>
      {/* <h1 className="text-3xl font-bold text-center text-green-500 mb-6">
        Market Conditions Normal
      </h1> */}
      <Card className="w-full bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-100">
            Market Data Big Board
          </CardTitle>
          <p className="text-sm text-gray-400">Real-time market indicators</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 items-center gap-2 p-2 bg-gray-800 rounded-md"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent ${
                      item.change >= 0
                        ? "border-b-[8px] border-b-green-500"
                        : "border-t-[8px] border-t-red-500"
                    }`}
                  ></div>
                  <div className="font-semibold text-[#daa520]">
                    {item.symbol}
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <div className="text-[#daa520]">{item.value.toFixed(2)}</div>
                  <div
                    className={
                      item.change >= 0 ? "text-[#daa520]" : "text-[#daa520]"
                    }
                  >
                    {item.change >= 0 ? "+" : ""}
                    {item.change.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
