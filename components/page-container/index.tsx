import React from "react";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 p-5">{children}</div>;
}

export function PageSectionTitle ({ children }: { children: string }) {
  return (
    <h2 className="text-foreground text-xs font-semibold uppercase">
      {children}
    </h2>
  );
}

export function PageSection({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

export function PageSectionScroller  ({ children }: { children: React.ReactNode }){
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}