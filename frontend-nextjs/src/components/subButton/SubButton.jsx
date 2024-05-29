"use client";
import { useFormStatus } from "react-dom";

export default function SubButton({ title }) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button className="btn btn-wide" disabled={pending}>
        {pending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          title
        )}
      </button>

      {/* <button className="btn btn-wide" disabled={pending}>
        {title}
        {pending && <span class="loading loading-dots loading-sm"></span>}
      </button> */}
    </div>
  );
}
