import { Post } from "./posts/post";
export default function Home() {

  // post.then((response)=>{
  //   console.log(response.data)
  // })

  return (
    <div
      className="py-5 px-10 max-w-6xl mx-auto max-h-[450px] rounded-md space-y-5 overflow-y-auto overflow-hidden scroll-smooth"
      id="scroll-posts"
    >
      <Post />
    </div>
  );
}
