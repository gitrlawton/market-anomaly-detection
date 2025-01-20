export const marketData = {
  GT10: 1.52,
  Cl1: 70.91,
  USGG3M: 0.05,
  DXY: 92.64,
  JPY: 110.14,
  VIX: 16.3,
};

export const marketCondition = "Normal";

export const growthInvestmentStrategies = {
  Conservative: `
Focus on preserving capital while capturing modest growth through high-quality investments. Prioritize established dividend-paying stocks and investment-grade bonds.

- Keep significant safety buffer in cash (25%) 
- Focus on high-grade government and corporate bonds (30%) 
- Invest in stable, dividend-paying stocks (40%) 
- Maintain minimal gold hedge (5%) 
  `,
  Balanced: `
Balance growth potential with reasonable risk management through diversified investments across major asset classes.

- Keep working cash reserve (15%) 
- Hold strategic bond positions for stability (20%) 
- Deploy significant capital into quality stocks (60%) 
- Maintain minimal gold hedge (5%) 
    `,
  Aggressive: `
Maximize growth potential through heavy equity exposure, accepting higher volatility for potentially greater returns.

- Maintain minimal cash reserves (5%) 
- Keep limited bond exposure for basic stability (10%) 
- Maximize stock market exposure (80%) 
- Add growth-focused commodity exposure (5%)
`,
};

export const defensiveInvestmentStrategies = {
  Balanced: `
Market instability detected. Implement a defensive strategy: 

During unstable market conditions, focus on capital preservation. Increase allocation to defensive sectors, consider adding gold or other safe-haven assets to your portfolio. Keep some cash on hand for potential buying opportunities. 

- Increase cash position to protect capital
- Rotate into bonds for stability
- Reduce equity exposure to minimize potential losses
- Increase gold position as hedge
    `,
};
