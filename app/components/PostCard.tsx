export default function PostCard({ username, content }: { username: string; content: string }) {
  return (
    <div>
      <p>{username}</p>
      <p>{content}</p>
    </div>
  );
}