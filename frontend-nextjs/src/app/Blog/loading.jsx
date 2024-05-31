import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="w-16 h-16 loading loading-spinner text-error"></span>
    </div>
  );
}

export default Loading;
