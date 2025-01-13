"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MarketGraph({ data }) {
  const chartData = [{ name: "Today", ...data }];
  const indicators = Object.keys(data);
  const colors = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#14b8a6",
    "#f97316",
    "#ec4899",
    "#6366f1",
  ];

  return (
    <Card className="w-full h-[600px] bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-100">
          Today's Market Data
        </CardTitle>
        <p className="text-sm text-gray-400">
          Visual representation of current market indicators
        </p>
      </CardHeader>
      <CardContent className="h-[calc(100%-80px)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              labelStyle={{ color: "#E5E7EB" }}
            />
            <Legend
              iconType="circle"
              iconSize={20}
              wrapperStyle={{ color: "#E5E7EB", padding: "10px" }}
            />
            {indicators.map((indicator, index) => (
              <Line
                key={indicator}
                type="monotone"
                dataKey={indicator}
                stroke={colors[index % colors.length]}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
