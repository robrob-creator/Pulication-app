import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts w-100">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
