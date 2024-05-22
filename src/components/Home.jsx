import { useState } from "react"


function Home() {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Pagina principal</h1>
            <p>ver mas info</p>
            <button onClick={handleClick}>Incrementar</button>
            <p>Contador: {counter} , otra cosa</p>
        </div>
    )
}

export default Home