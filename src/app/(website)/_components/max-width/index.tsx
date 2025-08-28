import cn from "@/core/utils/class-names";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthContainer = ({ className, children }: Props) => {
  return (
    <div className={cn("max-w-[1340px] w-full mx-auto px-3", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
