import type { DonationTimelineItem } from "../../types/donation";

interface DonationTimelineProps {
  items: DonationTimelineItem[];
}

function DonationTimeline({
  items,
}: DonationTimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="relative flex gap-4"
        >
          {index < items.length - 1 && (
            <div className="absolute left-4 top-9 h-10 w-px bg-slate-200" />
          )}

          <div
            className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
              item.status === "completed"
                ? "bg-emerald-100 text-emerald-700"
                : item.status === "current"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {item.status === "completed" ? "✓" : "•"}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              {item.description}
            </p>

            {item.timestamp && (
              <p className="mt-1 text-xs text-slate-400">
                {item.timestamp}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DonationTimeline;