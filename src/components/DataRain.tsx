import { useEffect, useRef } from "react";

const DATA_WORDS = [
  "SQL", "Python", "Power BI", "DAX", "ETL", "API", "KPI",
  "SELECT", "FROM", "WHERE", "JOIN", "GROUP BY", "ORDER BY",
  "pandas", "numpy", "matplotlib", "seaborn",
  "INSERT", "UPDATE", "DELETE", "CREATE",
  "AVG", "SUM", "COUNT", "MAX", "MIN",
  "0", "1", "01", "10", "11", "00",
  "{", "}", "()", "=>", "//", "&&", "||",
  "def", "import", "return", "class",
  "CSV", "JSON", "XML", "XLSX",
  "R²", "σ", "μ", "Σ", "Δ", "λ",
];

interface Char {
  text: string;
  y: number;
  speed: number;
  opacity: number;
  size: number;
}

interface Stream {
  x: number;
  chars: Char[];
}

// Detect device capabilities
const detectPerformanceLevel = (): "low" | "medium" | "high" => {
  if (typeof navigator === "undefined") return "medium";

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 8;

  // Low-end: few cores, limited memory
  if (cores <= 2 || memory <= 4) return "low";
  // Medium: typical modern device
  if (cores <= 4 || memory <= 8) return "medium";
  // High-end: powerful device
  return "high";
};

const DataRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamsRef = useRef<Stream[]>([]);
  const animRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const performanceLevelRef = useRef(detectPerformanceLevel());
  const fontCacheRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle visibility changes to pause animation when tab is inactive
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Optimize canvas context settings
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.scrollWidth;
      canvas.height = parent.scrollHeight;
      initStreams();
    };

    const initStreams = () => {
      const performanceLevel = performanceLevelRef.current;

      // Reduce stream count based on performance level
      const streamCount =
        performanceLevel === "low"
          ? Math.max(3, Math.floor(canvas.width / 320))
          : performanceLevel === "medium"
            ? Math.max(6, Math.floor(canvas.width / 200))
            : Math.max(8, Math.floor(canvas.width / 150));

      const streams: Stream[] = [];
      for (let i = 0; i < streamCount; i++) {
        const x = (i + 0.5) * (canvas.width / streamCount) + (Math.random() - 0.5) * 40;

        // Reduce characters per stream based on performance
        const charCount =
          performanceLevel === "low"
            ? 2 + Math.floor(Math.random() * 2)
            : performanceLevel === "medium"
              ? 3 + Math.floor(Math.random() * 3)
              : 4 + Math.floor(Math.random() * 4);

        const chars: Char[] = [];
        for (let j = 0; j < charCount; j++) {
          const layer = j / charCount; // Deterministic layer based on position
          chars.push({
            text: DATA_WORDS[Math.floor(Math.random() * DATA_WORDS.length)],
            y: Math.random() * canvas.height - canvas.height * 0.25,
            speed:
              performanceLevel === "low"
                ? 0.08 + layer * 0.16
                : 0.12 + layer * 0.25,
            opacity: 0.035 + layer * 0.08,
            size: 11 + layer * 5,
          });
        }
        streams.push({ x, chars });
      }
      streamsRef.current = streams;
    };

    const getFont = (size: number): string => {
      const key = String(size);
      if (!fontCacheRef.current.has(key)) {
        fontCacheRef.current.set(key, `300 ${size}px 'Inter', 'Courier New', monospace`);
      }
      return fontCacheRef.current.get(key)!;
    };

    let lastFrameTime = performance.now();
    const targetFrameTime = 1000 / 60; // 60 FPS target

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);

      // Pause animation when tab is hidden
      if (!isVisibleRef.current) return;

      const currentTime = performance.now();
      const deltaTime = currentTime - lastFrameTime;

      // Frame rate limiting to maintain performance - skip frames if needed on low-end
      if (
        performanceLevelRef.current === "low" &&
        deltaTime < targetFrameTime
      ) {
        return;
      }
      lastFrameTime = currentTime;

      if (!ctx || !canvas) return;

      // Clear canvas efficiently
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render all streams and characters
      for (const stream of streamsRef.current) {
        for (const char of stream.chars) {
          // Calculate hue once per character (instead of per render)
          const hue = 160 + Math.sin((char.y + stream.x) * 0.0015) * 18;
          ctx.fillStyle = `hsla(${hue | 0}, 50%, 60%, ${char.opacity})`;
          ctx.font = getFont(char.size);

          // Draw with minimal state changes
          ctx.fillText(char.text, stream.x, char.y);

          // Update position
          char.y += char.speed;

          // Reset when off-screen
          if (char.y > canvas.height + 50) {
            char.y = -50;
            char.text =
              DATA_WORDS[Math.floor(Math.random() * DATA_WORDS.length)];
          }
        }
      }
    };

    resize();
    animate();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        willChange: "contents",
        backfaceVisibility: "hidden",
      }}
      aria-hidden="true"
    />
  );
};

export default DataRain;
