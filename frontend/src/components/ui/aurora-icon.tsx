import type { LucideIcon } from "lucide-react";
import { memo, useId } from "react";

interface AuroraIconProps {
  icon: LucideIcon;
  className?: string;
  colors?: string[];
  speed?: number;
  strokeWidth?: number;
}

export const AuroraIcon = memo(
  ({
    icon: Icon,
    className = "",
    colors = [
      "#5B21B6",  // violet très foncé et saturé
      "#6D28D9",  // violet profond
      "#7C3AED",  // violet vif
      "#8B5CF6",  // violet saturé
      "#6B46C1",  // violet intense
    ],
    speed = 1,
    strokeWidth = 1.7,
  }: AuroraIconProps) => {
    const id = useId();
    const gradientId = `aurora-gradient-${id}`;

    return (
      <span className={`relative inline-block ${className}`}>
        <svg className="size-full dark:brightness-125" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {colors.map((color, index) => (
                <stop
                  key={index}
                  offset={`${(index / (colors.length - 1)) * 100}%`}
                  stopColor={color}
                >
                  <animate
                    attributeName="stop-color"
                    values={`${color};${colors[(index + 1) % colors.length]};${color}`}
                    dur={`${10 / speed}s`}
                    repeatCount="indefinite"
                  />
                </stop>
              ))}
            </linearGradient>
          </defs>
          <Icon
            className="size-full"
            strokeWidth={strokeWidth}
            stroke={`url(#${gradientId})`}
          />
        </svg>
      </span>
    );
  }
);

AuroraIcon.displayName = "AuroraIcon";
