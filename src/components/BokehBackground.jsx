import { useMemo } from "react";

export const BokehBackground = () => {
  // Generăm doar la mount (nu pe resize)
  const blobs = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: 120 + Math.random() * 180,
      x: Math.random() * 90,
      y: Math.random() * 80,
      color: `hsla(${190 + Math.random() * 40},90%,60%,${
        0.08 + Math.random() * 0.13
      })`,
      blur: `${30 + Math.random() * 60}px`,
      ani: 8 + Math.random() * 7,
      delay: Math.random() * 4 + "s",
    }));
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          style={{
            position: "absolute",
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            borderRadius: "50%",
            filter: `blur(${blob.blur}) brightness(1.1)`,
            mixBlendMode: "lighten",
            animation: `bokehfloat ${blob.ani}s ease-in-out infinite alternate`,
            animationDelay: blob.delay,
            opacity: 0.85,
          }}
        />
      ))}
      {/* Animation Keyframes inline/recomandat în css global */}
      <style>
        {`
        @keyframes bokehfloat {
          from { transform: translateY(0px);}
          to   { transform: translateY(-28px);}
        }
      `}
      </style>
    </div>
  );
};
