import { ComponentPropsWithoutRef } from "react";

export function Connector(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="660" height="310" viewBox="0 0 660 310" fill="none" {...props}>
      <path
        d="M110 310V68.9327H278V0"
        stroke="currentColor"
        opacity={0.1}
        strokeWidth={2}
      />
      <path d="M110 310V68.9327H278V0" stroke="url(#left)" strokeWidth={2} />

      <path
        d="M550 310V68.9327H382V0"
        stroke="currentColor"
        opacity={0.1}
        strokeWidth={2}
      />
      <path d="M550 310V68.9327H382V0" stroke="url(#right)" strokeWidth={2} />

      <path
        d="M330 0V310"
        stroke="currentColor"
        opacity={0.1}
        strokeWidth={2}
      />
      <path d="M330 0V310" stroke="url(#paint0_linear_122_2)" strokeWidth={2} />

      <defs>
        <linearGradient id="left" x1="0" x2="0" y1="2" y2="2">
          <stop offset="0%" stopColor="cyan" stopOpacity="0" />
          <stop offset="50%" stopColor="cyan" />
          <stop offset="100%" stopColor="cyan" stopOpacity="0" />
          <animate
            attributeName="y2"
            values="2;-1"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values="2;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <linearGradient id="right" x1="0" x2="0" y1="2" y2="2">
          <stop offset="0%" stopColor="cyan" stopOpacity="0" />
          <stop offset="50%" stopColor="cyan" />
          <stop offset="100%" stopColor="cyan" stopOpacity="0" />
          <animate
            begin="3s;op.end+3s"
            attributeName="y2"
            values="2;-1"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            begin="3s;op.end+3s"
            attributeName="y1"
            values="2;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <linearGradient
          id="paint0_linear_122_2"
          x1="330.5"
          y1="310"
          x2="330.5"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="pink" stopOpacity="0" />
          <stop offset="50%" stopColor="pink" />
          <stop offset="100%" stopColor="pink" stopOpacity="0" />

          <animate
            begin="3s;op.end+3s"
            attributeName="y2"
            values="310;-310"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            begin="3s;op.end+3s"
            attributeName="y1"
            values="310;0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
