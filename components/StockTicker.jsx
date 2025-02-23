"use client";

import { useEffect, useState, useRef } from "react";

export default function StockTicker() {
  const [tickerItems, setTickerItems] = useState([]);
  const containerRef = useRef(null);
  const tickerRef = useRef(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch("/api/market-data");

        if (!response.ok) {
          throw new Error("Failed to fetch market data");
        }

        const marketData = await response.json();

        const items = Object.entries(marketData).map(([symbol, data]) => ({
          symbol,
          value: data.currentValue,
          change: data.change,
        }));

        setTickerItems(items);
      } catch (error) {
        console.error("Failed to fetch market data:", error);
      }
    };

    fetchMarketData();

    let animationId;
    let position = 0;

    const animate = () => {
      if (containerRef.current && tickerRef.current) {
        position -= 0.5;

        if (Math.abs(position) >= tickerRef.current.offsetWidth / 3) {
          position = 0;
        }

        tickerRef.current.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gray-900 overflow-hidden py-2"
      aria-label="Stock Ticker"
    >
      <div ref={tickerRef} className="inline-block whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="inline-flex items-center px-4 py-2">
            <span
              className={`w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent mr-2 ${
                item.change >= 0
                  ? "border-b-[6px] border-b-green-500"
                  : "border-t-[6px] border-t-red-500"
              }`}
              aria-hidden="true"
            ></span>
            <span className="font-semibold text-[#daa520]">{item.symbol}</span>
            <span className="text-gray-300 ml-2">{item.value.toFixed(2)}</span>
            <span
              className={`ml-2 ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(2)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
