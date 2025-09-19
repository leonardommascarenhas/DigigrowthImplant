// components/Curve.tsx
interface CurveProps {
  type?: "convex" | "concave";
  position?: "top" | "bottom";
  fill?: string;
  height?: string;
}

const Curve = ({
  type = "convex",
  position = "bottom",
  fill = "#ffffff",
  height = "120px",
}: CurveProps) => {
  const isConvex = type === "convex";

  const path = isConvex
    ? "M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z"
    : "M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z";

  const edgeClass =
    position === "top" ? (type === "concave" ? "-top-24" : "-top-2") : "-bottom-0";

  return (
    <svg
      className={`absolute ${edgeClass} left-0 w-full z-10`}
      style={{ height }}
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none">
      <path d={path} fill={fill} stroke="none" />
    </svg>
  );
};

export default Curve;
