import yahooFinance from "yahoo-finance2";

export async function fetchCurrentMarketData() {
  // List of symbols with equivalencies
  const symbols = [
    "DX-Y.NYB", // DXY - U.S. Dollar Index
    "JPY=X", // JPY - Japanese Yen to USD
    "CL=F", // Cl1 - Crude Oil Futures
    "^VIX", // VIX - Volatility Index
    "^TNX", // GT10 - U.S. 10-Year Treasury Bond Yield
    "^IRX", // USGG3M - U.S. 3-Month Treasury Yield
  ];

  try {
    // Create an object to store the results
    const marketData = {};

    // Fetch quotes for each symbol
    for (const symbol of symbols) {
      try {
        const quote = await yahooFinance.quote(symbol);

        // Map symbol to a more readable key
        let key;
        switch (symbol) {
          case "DX-Y.NYB":
            key = "DXY";
            break;
          case "JPY=X":
            key = "JPY";
            break;
          case "CL=F":
            key = "Cl1";
            break;
          case "^VIX":
            key = "VIX";
            break;
          case "^TNX":
            key = "GT10";
            break;
          case "^IRX":
            key = "USGG3M";
            break;
          default:
            key = symbol;
        }

        marketData[key] = {};
        marketData[key].change = quote.regularMarketChange;
        // Store the regular (most recently traded price) or closing price
        if (key == "USGG3M") {
          marketData[key].currentValue =
            (quote.regularMarketPrice || quote.close) + 0.11;
        } else {
          marketData[key].currentValue =
            quote.regularMarketPrice || quote.close;
        }
      } catch (symbolError) {
        console.error(`Error fetching data for ${symbol}:`, symbolError);
        // Optionally, you can set a default value or skip the symbol
        marketData[key] = null;
      }
    }

    return marketData;
  } catch (error) {
    console.error("Error in fetchTodaysData:", error);
    throw error;
  }
}

async function debugSymbolData(symbol) {
  try {
    // Fetch quote data
    console.log("--- Quote Data ---");
    const quote = await yahooFinance.quote(symbol);
    console.log(JSON.stringify(quote, null, 2));
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
  }
}

// debugSymbolData("^IRX");

// fetchCurrentMarketData().then(console.log).catch(console.error);
