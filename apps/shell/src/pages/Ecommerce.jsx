import { Suspense, lazy } from "react";

const RemoteEcommerce = lazy(() => import("microEcommerce/App"));

function Ecommerce() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] text-[#111827]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce" />
            <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce [animation-delay:150ms]" />
            <span className="h-2 w-2 rounded-full bg-[#111827] animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      }
    >
      <RemoteEcommerce />
    </Suspense>
  );
}

export default Ecommerce;
