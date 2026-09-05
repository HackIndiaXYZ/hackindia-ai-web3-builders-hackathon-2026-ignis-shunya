import { useState } from "react";
import VerificationForm from "../components/verification/VerificationForm";
import VerificationResult from "../components/verification/VerificationResult";
import BlockchainProof from "../components/verification/BlockchainProof";
import { verificationResults } from "../data/mockData";

function Verify() {
  const [result, setResult] = useState(
    verificationResults[0]
  );

  const handleVerify = (recordId: string) => {
    const found = verificationResults.find(
      (item) => item.recordId.toLowerCase() === recordId.toLowerCase()
    );

    if (found) {
      setResult(found);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Public Verification
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Verify a TrustAid record.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Check whether a record matches its stored cryptographic
            proof.
          </p>
        </div>

        <div className="mt-10">
          <VerificationForm onVerify={handleVerify} />
        </div>

        <div className="mt-8 space-y-6">
          <VerificationResult result={result} />
          <BlockchainProof result={result} />
        </div>
      </div>
    </main>
  );
}

export default Verify;