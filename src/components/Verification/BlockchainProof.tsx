import {
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import type { VerificationResult } from "../../types/verification";

interface BlockchainProofProps {
  result: VerificationResult;
}

function BlockchainProof({
  result,
}: BlockchainProofProps) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 size={22} />
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Blockchain Proof
          </p>

          <h3 className="font-semibold text-slate-900">
            {result.recordId}
          </h3>
        </div>
      </div>

      <div className="mt-7 space-y-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Original Hash
          </p>

          <p className="mt-1 break-all text-sm font-medium text-slate-900">
            {result.originalHash}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Current Hash
          </p>

          <p className="mt-1 break-all text-sm font-medium text-slate-900">
            {result.currentHash}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm text-slate-500">
            Hash Match
          </span>

          <span
            className={`font-semibold ${
              result.hashMatch
                ? "text-emerald-600"
                : "text-red-600"
            }`}
          >
            {result.hashMatch ? "Verified ✓" : "Mismatch ✕"}
          </span>
        </div>

        {result.blockchainTx && (
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
          >
            View Blockchain Transaction
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>
  );
}

export default BlockchainProof;