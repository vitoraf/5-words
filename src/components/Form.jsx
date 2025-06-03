function Form({handleForm}) {
    function handleSubmit(e){
        e.preventDefault()
        const words = [e.target[0].value , e.target[1].value , e.target[2].value , e.target[3].value , e.target[4].value]
        console.log(words)
        handleForm(words)
    }
    return(
        <div className="w-full md:w-68 mx-auto p-4">
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
            <input type="text" className="border border-slate-200 text-slate-200 rounded p-1 text-center" required/>
            <input type="text" className="border border-slate-200 text-slate-200 rounded p-1 text-center" required/>
            <input type="text" className="border border-slate-200 text-slate-200 rounded p-1 text-center" required/>
            <input type="text" className="border border-slate-200 text-slate-200 rounded p-1 text-center" required/>
            <input type="text" className="border border-slate-200 text-slate-200 rounded p-1 text-center" required/>
            <button type="submit" className="bg-slate-200 text-slate-800 rounded p-1">Começar</button>
        </form>

        </div>
    )
}
export default Form