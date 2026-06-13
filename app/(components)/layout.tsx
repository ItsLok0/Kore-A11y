import React from "react";

export default function Layout({ children }: {
    children: React.ReactNode 
}) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="grow px-1 sm:px-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
    </div>
  );
}