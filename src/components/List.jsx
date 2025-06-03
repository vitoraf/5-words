import Word from "./Word"
import useStore from "../composables/store"
import { useState } from "react"
function List({words}) {
    const [position, setPosition] = useState([true, false, false, false, false])
    const updateWords = useStore((state) => state.updateWords)
    function resetGame() {
        updateWords([])
    }
    function nextWord(index) {
        console.log(position, index)
        let aux = position.slice()
        aux[index + 1] = true
        setPosition(aux)
    }
    return (
        <div className="flex flex-col w-fit gap-2 my-5 mx-auto">
        {words.map((word, index) => {
            return <Word word={word} key={word} position={index} nextWord={nextWord} active={position[index]}/>
            }
        )}
        <button className="bg-slate-200 text-slate-800 w-80 mx-auto rounded p-1" onClick={resetGame}>Reiniciar</button>
        </div>
    )
}
export default List