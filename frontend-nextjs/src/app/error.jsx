"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <div role="alert" className="w-3/12 m-4 alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2>Something went wrong!</h2>
        <button className="text-sm text-red-800" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
