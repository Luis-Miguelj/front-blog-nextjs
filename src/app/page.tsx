import { Suspense } from 'react'
import { Post } from "./posts/post";
export default function Home() {

  return (
    <div
      className="py-5 px-10 max-w-6xl mx-auto max-h-[450px] rounded-md space-y-5 overflow-y-auto overflow-hidden scroll-smooth"
      id="scroll-posts"
    >
      <Suspense fallback={<p>Carregando...</p>}>
        <Post />
      </Suspense>
    </div>
  );
}
