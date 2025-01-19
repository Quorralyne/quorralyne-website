import * as flags from "country-flag-icons/react/3x2";

interface FlagProps {
  country: keyof typeof flags;
  className?: string;
}

export function Flag({ country, className = "flag-icon" }: FlagProps) {
  const FlagComponent = flags[country];
  return FlagComponent ? <FlagComponent className={className} /> : null;
}
