import { Postagens } from "@/components/postagem"
export async function Post(){

  const response = await fetch(`https://back-end-blog-sml1.onrender.com/?search=`, {
    next: {
      tags: ['get-post']
    }
  })
  const data = await response.json()

  return (
    data.map((items:any)=>(
      <div key={items.id} className="space-y-8 overflow-hidden">
        <Postagens title={items.title} postagem={items.postagem} />
      </div>
    ))
  )
}