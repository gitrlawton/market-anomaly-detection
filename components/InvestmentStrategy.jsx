import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvestmentStrategy({ condition, strategy }) {
  return (
    <Card className="h-full bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-100">
          Investment Strategy
        </CardTitle>
        <p className="text-sm text-gray-400">
          Recommended approach based on current market conditions
        </p>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-gray-300">
          <strong>Market Condition: </strong>
          <span
            className={
              condition === "Normal" ? "text-green-400" : "text-red-400"
            }
          >
            {condition}
          </span>
        </p>
        <p className="text-gray-300 whitespace-pre-wrap">{strategy}</p>
      </CardContent>
    </Card>
  );
}
