'use client'
import { useState } from 'react'
export function Filter(){
  
  const [filtro, setFiltro] = useState('')

  function handlePesquisa(title: string){
    if(!title){
      return
    }
    console.log(title)

    setFiltro(title)
  }

  console.log(filtro)

  return { filtro, handlePesquisa}
}