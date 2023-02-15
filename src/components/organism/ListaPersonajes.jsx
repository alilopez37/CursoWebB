import {useState, useEffect, useContext} from 'react'
import Personaje from '../molecules/Personaje'
import "../../assets/styles/Personaje.css"

function ListaPersonajes() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)


    const handlerClick = (e) => {
/*         fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then (data => {
            console.log(data)
            setCharacters(data.results)
        }) */
        setLoading(!loading)
    }

    useEffect(()=>{
        console.log('useEffect')
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then (data => {
            console.log(data)
            setCharacters(data.results)
        })    
    },[loading])

    return ( 
        <>
        <div>
            <h2>Lista de personajes  </h2>
            <button onClick={handlerClick}>Mostrar personajes</button>
            <div className='ListaPersonajes'>
                {loading && characters.map( character => 
                    <Personaje 
                        key={character.id}
                        img={character.image} 
                        name={character.name}
                    />)
                }
            </div>
            </div>
        </>
     );
}

export default ListaPersonajes;