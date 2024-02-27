import { Postagens } from "@/components/postagem"

interface FilterProps {
  filter?: string
}
export async function Filter({ filter }: FilterProps){
  console.log(filter)
  if(filter == ''){
    return
  }else{
    const res = await fetch(`https://back-end-blog-sml1.onrender.com/?search=${filter}`)
    const data = await res.json()
    return(
      data.map((items: any)=>(
        <div key={items.id} className="space-y-8 overflow-hidden">
        <Postagens title={items.title} postagem={items.postagem} />
      </div>
      ))
    )
  }

  

  // console.log(data)

  
}