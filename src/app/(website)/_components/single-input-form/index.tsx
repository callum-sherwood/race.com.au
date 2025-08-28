"use client";

import cn from "@/core/utils/class-names";
import { Button, Input } from "rizzui";

type Props = {
  name?: string;
  inputType?:
    | "number"
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "time"
    | "date"
    | "week"
    | "month"
    | "datetime-local"
    | undefined;
  placeholder: string;
  variant?: "text" | "flat" | "outline";
  rounded?: "sm" | "md" | "lg" | "pill";
  className?: string;
  inputClassName?: string;
  containerClassName?: string;
  buttonText?: string;
  buttonType?: "submit" | "button";
  buttonVariant?: "solid" | "outline" | "flat";
  buttonClassName?: string;
};

const SingleInputForm = ({
  name,
  inputType = "search",
  variant = "text",
  rounded = "pill",
  placeholder,
  className,
  inputClassName,
  containerClassName,
  buttonText,
  buttonType = "button",
  buttonVariant = "solid",
  buttonClassName,
}: Props) => {
  return (
    <div className={cn(containerClassName)}>
      <form onSubmit={() => {}} className={cn("relative flex flex-col")}>
        <Input
          name={name}
          size="xl"
          type={inputType}
          placeholder={placeholder}
          variant={variant}
          rounded={rounded}
          inputClassName={cn("!ring-0 [&>input]:!outline-0", inputClassName)}
          className={cn("w-full", className)}
        />
        <Button
          type={buttonType}
          variant={buttonVariant}
          className={cn(
            "absolute right-0.5 top-1/2 -translate-y-1/2 !text-base",
            buttonClassName
          )}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default SingleInputForm;
