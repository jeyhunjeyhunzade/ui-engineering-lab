import { useState } from "preact/hooks";

export default function CommentToggle() {
  const [showComments, setShowComments] = useState(false);
  const comments = [
    { author: "Alice", text: "Great explanation of islands!" },
    { author: "Bob", text: "This is so much faster than SPAs!" },
    { author: "Charlie", text: "Love the selective hydration approach." },
  ];

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        border: "2px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <button
        onClick={() => setShowComments(!showComments)}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          background: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {showComments ? "🔼 Hide" : "🔽 Show"} Comments ({comments.length})
      </button>

      {showComments && (
        <div style={{ marginTop: "1rem" }}>
          {comments.map((comment, i) => (
            <div
              key={i}
              style={{
                padding: "1rem",
                background: "#f9f9f9",
                borderRadius: "6px",
                marginBottom: "0.5rem",
              }}
            >
              <strong>{comment.author}</strong>
              <p style={{ margin: "0.5rem 0 0 0" }}>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
