import { NextResponse } from "next/server";
import { fetchCurrentMarketData } from "@/utils";

export async function GET() {
  try {
    const marketData = await fetchCurrentMarketData();
    return NextResponse.json(marketData);
  } catch (error) {
    console.error("Market data fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch market data" },
      { status: 500 }
    );
  }
}
