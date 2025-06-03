import {  useRef } from "react"
import { useState } from "react"
function Word({word, position, nextWord, active}) {
    const [status, setStatus] = useState(Array(word.length).fill(''))
    const [list, setList] = useState(1)
    const wordSplit = word.split('')
    const ref = useRef([])
    function checkLetter(letter, index) {
        let aux = status.slice()
        if(wordSplit[index] === letter) {
            setList(list + 1)
            aux[index] = 'true'
            if(index !== wordSplit.length - 1){
                setTimeout(() => {
                    ref.current[index + 1].focus()
                }, 100)
            }
            else {
                ref.current[index].blur()
                nextWord(position)
            }
       }else{
            setTimeout(() => {
                ref.current[index].value = ''
            }, 500)
           aux[index] = 'false'
       }
       console.log(position)
       setStatus(aux)
    }
    return (
        <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
        {wordSplit.map((letter, index) => {
            if(index === 0) {
                return <span className="border rounded size-8 text-center align-middle text-slate-200" key={index}>{letter}</span>
            }
            if(status[index] === 'true') {
                return <span className="border rounded size-8 text-center align-middle text-slate-200 border-green-500" key={index}>{letter}</span>
            }
            if(index === list) {
                
                return <input type="text" className="size-8 text-center align-middle text-slate-200 border rounded focus:outline-0" style={status[index] === 'true' ? {borderColor: 'green'} : status[index] === 'false' ? {borderColor: 'red'} :  {borderColor: 'white'} 
                } onChange={(e) => checkLetter(e.target.value, index)} key={index} ref={(e)=> ref.current[index] = e} maxLength="1" disabled={!active}/>
            }
        })}

            </div>
        <button className="size-8 text-center align-middle text-slate-200 border rounded focus:outline-0 place-self-end" onClick={help} disabled={!active}>?</button>
        </div>
    )
    function help(){
        if(list < wordSplit.length){
            ref.current[list].value = wordSplit[list]
            checkLetter(wordSplit[list], list)
        }
    }
}
export default Word