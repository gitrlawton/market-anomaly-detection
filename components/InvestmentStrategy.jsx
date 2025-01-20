"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InvestmentStrategy({ condition, strategy }) {
  const [approach, setApproach] = useState("Balanced");

  return (
    <Card className="h-full bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-200">
          Investment Strategy
        </CardTitle>
        <p className="text-sm text-gray-400">
          Recommended course of action based on current market condition and
          selected approach.
        </p>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-gray-300">
          <strong>Current Market: </strong>
          <span
            className={
              condition === "Normal" ? "text-green-400" : "text-red-400"
            }
          >
            {condition.charAt(0).toUpperCase() + condition.slice(1)}
          </span>
        </p>
        <div className="flex items-center mb-4">
          <label
            htmlFor="approach-select"
            className="font-bold text-gray-300 mr-4 whitespace-nowrap"
          >
            {" "}
            Approach:
          </label>
          <Select
            value={approach}
            onValueChange={(value) => setApproach(value)}
          >
            <SelectTrigger className="max-w-[140px] bg-gray-700 text-gray-200 border-gray-600">
              <SelectValue placeholder="Select approach" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 text-gray-200 border-gray-600 shadow-lg">
              <SelectItem
                value="Conservative"
                className="hover:bg-gray-600 focus:bg-gray-600 focus:text-gray-200"
              >
                Conservative
              </SelectItem>
              <SelectItem
                value="Balanced"
                className="hover:bg-gray-600 focus:bg-gray-600 focus:text-gray-200"
              >
                Balanced
              </SelectItem>
              <SelectItem
                value="Aggressive"
                className="hover:bg-gray-600 focus:bg-gray-600 focus:text-gray-200"
              >
                Aggressive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-gray-300 whitespace-pre-wrap">
          {strategy[approach]}
        </p>
      </CardContent>
      <style jsx global>{`
        .select-content .select-item:hover,
        .select-content .select-item:focus {
          color: #f3f4f6 !important;
        }
      `}</style>
    </Card>
  );
}
