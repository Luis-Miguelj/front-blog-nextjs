import { revalidateTag } from "next/cache"

export function FormAdd(){

  async function handleFormAdd(form: FormData){
    'use server'

    const title = form.get('title')
    const post = form.get('postagem')

    console.log(post, title)

    if(!post && !title){
      return
    }

    await fetch('https://back-end-blog-sml1.onrender.com/postagens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        postagem: post
      })
    }).then((res)=>{
      console.log('adicionado com sucesso!')
      console.log(res.body)
    })

    revalidateTag('get-post')

  }

  return(
    <form action={handleFormAdd}>
      <input type="text" name="title" className="text-zinc-950"/>
      <input type="text" name="postagem" className="text-zinc-950"/>
      <button type="submit">add</button>
    </form>
  )
}