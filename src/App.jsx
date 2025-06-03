// import { useState } from 'react'
// import './App.css'
import List from './components/List'
import Form from './components/Form'
import useStore from './composables/store'


function App() {
  const words =  useStore((state) => state.words)
  const updateWords = useStore((state) => state.updateWords)


  return (
    <main className='bg-slate-800 h-screen m-0 p-5 border-0 text-center'>
      <h1 className='text-lg text-slate-200'>Jogo das 5 palavras</h1>
      <p className=' text-slate-200'>Escolha 5 palavras com conexão entre si para seu adversário adivinhar</p>
      {
        words.length  === 0 ? <Form handleForm={updateWords}/> : <List words={words}/>
      }
    </main>
  )
}

export default App

