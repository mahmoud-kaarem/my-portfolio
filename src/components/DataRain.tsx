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
  "42", "256", "1024", "3.14", "0.95",
];

interface Stream {
  x: number;
  chars: { text: string; y: number; speed: number; opacity: number; size: number; blur: number }[];
}

const DataRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamsRef = useRef<Stream[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.scrollWidth;
      canvas.height = parent.scrollHeight;
      initStreams();
    };

    const initStreams = () => {
      const cols = Math.floor(canvas.width / 80);
      const streams: Stream[] = [];
      for (let i = 0; i < cols; i++) {
        const x = (i + 0.5) * (canvas.width / cols) + (Math.random() - 0.5) * 30;
        const charCount = 4 + Math.floor(Math.random() * 6);
        const chars = [];
        for (let j = 0; j < charCount; j++) {
          const layer = Math.random();
          chars.push({
            text: DATA_WORDS[Math.floor(Math.random() * DATA_WORDS.length)],
            y: Math.random() * canvas.height - canvas.height * 0.2,
            speed: 0.15 + layer * 0.35,
            opacity: 0.04 + layer * 0.1,
            size: 10 + layer * 6,
            blur: layer < 0.4 ? 2 : layer < 0.7 ? 1 : 0,
          });
        }
        streams.push({ x, chars });
      }
      streamsRef.current = streams;
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const stream of streamsRef.current) {
        for (const char of stream.chars) {
          ctx.save();
          if (char.blur > 0) {
            ctx.filter = `blur(${char.blur}px)`;
          }

          const hue = 160 + Math.sin(char.y * 0.002) * 20;
          ctx.fillStyle = `hsla(${hue}, 45%, 65%, ${char.opacity})`;
          ctx.font = `300 ${char.size}px 'Inter', monospace`;
          ctx.textAlign = "center";
          ctx.fillText(char.text, stream.x, char.y);
          ctx.restore();

          char.y += char.speed;
          if (char.y > canvas.height + 50) {
            char.y = -50;
            char.text = DATA_WORDS[Math.floor(Math.random() * DATA_WORDS.length)];
          }
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default DataRain;
