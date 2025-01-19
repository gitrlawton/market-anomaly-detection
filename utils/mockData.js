export const marketData = {
  GT10: 1.52,
  Cl1: 70.91,
  USGG3M: 0.05,
  DXY: 92.64,
  JPY: 110.14,
  VIX: 16.3,
};

export const marketCondition = "Normal";

export const investmentStrategy = {
  Normal: `
Market stability detected. Implement a growth strategy:

During stable market conditions, consider a balanced approach. Maintain a diversified portfolio with a mix of stocks and bonds. Look for opportunities in blue-chip stocks and consider increasing exposure to growth sectors. 

- Deploy capital into equities
- Maintain diversification across assets
- Keep tactical cash reserve
- Maintain small gold position
    `,
  "Crisis/Risk Alert": `
Market instability detected. Implement a defensive strategy: 

During unstable market conditions, focus on capital preservation. Increase allocation to defensive sectors, consider adding gold or other safe-haven assets to your portfolio. Keep some cash on hand for potential buying opportunities. 

- Increase cash position to protect capital
- Rotate into bonds for stability
- Reduce equity exposure to minimize potential losses
- Increase gold position as hedge
    `,
};
