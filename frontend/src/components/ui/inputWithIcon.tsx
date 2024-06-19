import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [inputType, setInputType] = useState(type);

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          ref={ref}
          {...props}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
        />
        <span
          className="cursor-pointer text-gray-400 text-xs absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" ? (
            <EyeOff className="w-5" />
          ) : (
            <Eye className="w-5" />
          )}
        </span>
      </div>
    );
  },
);
InputWithIcon.displayName = "Input";

export { InputWithIcon };
