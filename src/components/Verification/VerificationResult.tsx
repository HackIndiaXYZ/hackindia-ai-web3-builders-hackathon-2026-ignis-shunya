import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { VerificationResult as ResultType } from "../../types/verification";

interface VerificationResultProps {
  result: ResultType;
}

function VerificationResult({
  result,
}: VerificationResultProps) {
  const verified = result.status === "verified";

  return (
    <div
      className={`rounded-3xl border p-7 ${
        verified
          ? "border-emerald-200 bg-emerald-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-4">
        {verified ? (
          <CheckCircle2 className="mt-1 text-emerald-600" />
        ) : (
          <AlertTriangle className="mt-1 text-red-600" />
        )}

        <div>
          <h2
            className={`text-2xl font-bold ${
              verified
                ? "text-emerald-900"
                : "text-red-900"
            }`}
          >
            {verified
              ? "Record Verified"
              : "Record Integrity Failed"}
          </h2>

          <p
            className={`mt-2 ${
              verified
                ? "text-emerald-800"
                : "text-red-800"
            }`}
          >
            {verified
              ? "The uploaded record matches the stored verification proof."
              : "The current record does not match the original verification proof."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerificationResult;