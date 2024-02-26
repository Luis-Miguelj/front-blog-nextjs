'use client'
import { Postagens } from "@/components/postagem"
import { Filter } from "@/function/filter"
export async function Post(){

  const { filtro } = Filter()

  console.log(filtro)

  const response = await fetch(`https://back-end-blog-sml1.onrender.com/?search=${filtro}`, {
    next: {
      tags: ['get-post']
    }
  })
  const data = await response.json()

  console.log(data)

  return (
    data.map((items:any)=>(
      <div key={items.id} className="space-y-8 overflow-hidden">
        <Postagens title={items.title} postagem={items.postagem} />
      </div>
    ))
  )
}