import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Character from '../components/Character'

function Characters(props) {
    const [characters, setCharacters] = useState(null);
    const BASE_URL = 'http://localhost:4000/characters/'

    const getCharacters = async () => {
        try {
            const response = await fetch(BASE_URL);
            const allCharacters = await response.json();
            setCharacters(allCharacters)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className='character-index'>
        {characters ? characters.map((character, idx) => {
            return (
                <div>
                    <h1>{character.name}</h1>
                    <Link to={`/characters/${character._id}`}>
                        <img src={character.image} alt={character.name} max-height="300px"/>
                    </Link>
                    
                </div>
            )
        }) : <h1>Loading...</h1>
    }
        </div>

    )
}

export default Characters;