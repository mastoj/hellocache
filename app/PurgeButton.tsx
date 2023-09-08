"use client";
import { revalidate, revalidateUrl } from "./actions";

export default function PurgeButton({
  tag,
  url,
}: {
  tag?: string;
  url?: string;
}) {
  return (
    <div className="w-full flex justify-center">
      <button
        className="px-4 py-2 bg-green-500 rounded hover:bg-green-300"
        onClick={() =>
          tag ? revalidate(tag) : url ? revalidateUrl(url) : null
        }
      >
        Purge {tag ?? url ?? "all"}
      </button>
    </div>
  );
}
