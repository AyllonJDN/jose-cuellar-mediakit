export default function WaveDivider({
  color = "#fbfdfd",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      style={{ transform: flip ? "rotate(180deg)" : undefined, display: "block" }}
      aria-hidden
    >
      <path
        className="wave-anim"
        d="M0,32 C180,70 360,0 600,30 C840,60 1020,10 1200,36 L1200,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}
