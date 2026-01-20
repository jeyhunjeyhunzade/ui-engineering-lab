import { useState } from "preact/hooks";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid #e0e0e0",
        borderRadius: "8px",
        display: "inline-block",
        marginBottom: "1rem",
      }}
    >
      <button
        onClick={handleLike}
        style={{
          fontSize: "2rem",
          padding: "0.5rem 1rem",
          border: "none",
          background: liked ? "#ff6b6b" : "#f0f0f0",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        {liked ? "❤️" : "🤍"} {likes}
      </button>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#666" }}>
        {liked ? "Thanks for liking!" : "Click to like this post"}
      </p>
    </div>
  );
}
