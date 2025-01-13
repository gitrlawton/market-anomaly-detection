import yahooFinance from "yahoo-finance2";

async function fetchHistoricalData() {
  // List of symbols with equivalencies
  const symbols = [
    // "GC=F", // XAU BGNL - Gold Futures
    // "DX-Y.NYB", // DXY - U.S. Dollar Index
    // "JPY=X", // JPY - Japanese Yen to USD
    // "6B=F", // GBP - British Pound to USD
    // "CL=F", // Cl1 - Crude Oil Futures
    // "^VIX", // VIX - Volatility Index
    // "^TYX", // USGG30YR - 30-Year Treasury Bond Yield
    // "^TNX", // GT10 - U.S. 10-Year Treasury Bond Yield
    // "^IRX", // USGG3M - U.S. 3-Month Treasury Yield
    // "^GSPC", // MXUS - U.S. Market (S&P 500 Index as proxy)  Subtract 100 to get close value
    // "IS0U.MU", // MXEU - Europe Market (SPDR EURO STOXX 50 ETF)   NONE
    // "MXJP.XC", // MXJP - Japan Market (Nikkei 225 Index)  NONE
    // "^BVSP", // MXBR - Brazil Market (Bovespa Index)
    // "^BSESN", // MXIN - India Market (BSE Sensex)
    // "000001.SS", // MXCN - China Market (SSE Composite Index)
  ];

  // Period of historical data
  const startDate = "2021-04-20";
  const endDate = "2021-04-21";
  const interval = "1d"; // Daily data

  for (const symbol of symbols) {
    try {
      const data = await yahooFinance.chart(symbol, {
        period1: startDate,
        period2: endDate,
        interval: interval,
      });
      console.log(`Historical data for ${symbol}:`, data);
      // Extract close value
      const close = data.quotes[0]?.close;
      console.log(`Close value for ${symbol}:`, close);

      // Fetch quote data
      const quoteData = await yahooFinance.quote(symbol);
      console.log(`Quote data for ${symbol}:`, quoteData);

      const quoteSummaryData = await yahooFinance.quoteSummary(symbol, {
        modules: [
          "assetProfile",
          "summaryDetail",
          "financialData",
          "price",
          "earnings",
        ],
      });
      console.log(`Quote Summary for ${symbol}:`, quoteSummaryData);

      console.log("-------------------");
    } catch (error) {
      console.error(`Failed to fetch data for ${symbol}:`, error.message);
    }
  }
}

fetchHistoricalData();

async function searchYahooFinance() {
  try {
    const result = await yahooFinance.search("BDIY");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// searchYahooFinance();
