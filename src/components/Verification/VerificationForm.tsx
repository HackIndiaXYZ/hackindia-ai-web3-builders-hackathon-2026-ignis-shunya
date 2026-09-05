import { useState } from "react";

interface VerificationFormProps {
  onVerify: (recordId: string) => void;
}

function VerificationForm({
  onVerify,
}: VerificationFormProps) {
  const [recordId, setRecordId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const value = recordId.trim();

    if (!value) {
      return;
    }

    onVerify(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-7 shadow-sm"
    >
      <label className="text-sm font-medium text-slate-700">
        Record ID
      </label>

      <input
        value={recordId}
        onChange={(event) => setRecordId(event.target.value)}
        placeholder="CHA-1029"
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <button
        type="submit"
        className="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold text-white hover:bg-emerald-700"
      >
        Verify Record
      </button>
    </form>
  );
}

export default VerificationForm;