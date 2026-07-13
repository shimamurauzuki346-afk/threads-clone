import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div>
      <PostCard username="taro" content="今日はいい天気" />
      <PostCard username="hanako" content="ラーメン食べた" />
    </div>
  );
}