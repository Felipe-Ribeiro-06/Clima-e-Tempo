import { BsSearch } from "react-icons/bs"
import { useState, type FormEvent } from "react"
import { useNavigate} from 'react-router-dom'



export function Home (){
    const [input , setInput] = useState("") ;
    const navigate = useNavigate()

    function handleSubmit(e : FormEvent){
        e.preventDefault();
        if (input=== "") return

        navigate(`/detalhes/${input}`)

    }

    return (

    <div>
    <h1>
      Saiba como está o clima em diferentes regiões do Mundo
    </h1>
    <form  onSubmit={handleSubmit}>
       <input 
    type="text" 
    id="cidade"
    name="cidade"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Digite o nome da cidade..."
/>

    <button type="submit"> <BsSearch size={25}></BsSearch></button>

    </form>
   
   </div>
    )
}