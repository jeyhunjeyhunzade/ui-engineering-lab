import { useState, useEffect } from "preact/hooks";

export default function ViewCounter() {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const randomViews = Math.floor(Math.random() * 1000) + 100;
      setViews(randomViews);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid #e0e0e0",
        borderRadius: "8px",
        display: "inline-block",
        marginBottom: "1rem",
        marginLeft: "1rem",
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>
        👁️ {loading ? "..." : views.toLocaleString()}
      </div>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#666" }}>
        {loading ? "Loading views..." : "Total views"}
      </p>
    </div>
  );
}
