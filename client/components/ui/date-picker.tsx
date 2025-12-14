import * as React from "react";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function DatePicker({
  value = "2024-12-01",
  onChange,
  className,
}: DatePickerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full h-8 px-3 rounded border border-neutral-200 shadow-[0_1px_2px_0_rgba(50,56,62,0.08)] bg-white cursor-pointer hover:bg-neutral-20",
        className,
      )}
    >
      <span className="text-sm font-normal text-text-primary leading-5">
        {value}
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 0.75V2.25H11.25V0.75H12.75V2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H5.25V0.75H6.75ZM15 8.25H3V14.25H15V8.25ZM5.25 3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75Z"
          fill="#1D293D"
        />
      </svg>
    </div>
  );
}
