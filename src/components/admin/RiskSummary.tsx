interface RiskSummaryProps {
  score: number;
  level: "low" | "medium" | "high";
}

function RiskSummary({
  score,
  level,
}: RiskSummaryProps) {
  const styles = {
    low: "bg-emerald-50 text-emerald-700",
    medium: "bg-amber-50 text-amber-700",
    high: "bg-red-50 text-red-700",
  };

  return (
    <div className={`rounded-2xl p-6 ${styles[level]}`}>
      <p className="text-sm font-medium">AI Risk Score</p>

      <div className="mt-2 flex items-end gap-2">
        <p className="text-4xl font-bold">{score}</p>
        <p className="mb-1 text-sm">/ 100</p>
      </div>

      <p className="mt-2 text-sm font-semibold uppercase">
        {level} risk
      </p>
    </div>
  );
}

export default RiskSummary;