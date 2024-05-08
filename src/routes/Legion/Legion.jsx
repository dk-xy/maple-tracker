// legion.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddCharacter from '../../components/AddCharacter';
import ResetLegion from '../../components/ResetLegion';
import Layout from '../../Layout';
import './legion.css'

// const [character, setCharacter] = useState(null)

function Legion() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // Retrieve characters from localStorage
        // const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];
        const characters = JSON.parse(localStorage.getItem('Characters')) || [];
        setCharacters(characters)
    }, []);

    return (

        <Layout>
            <div className="Legion">
                LEGION
                <AddCharacter />
                <ResetLegion />

                <div className='legionContainer'>
                    {characters.map((character, index) => (
                        <div className='legionBlock' key={index}>
                            {/* Display character details */}
                            Character Name: {character.characterName}, Class: {character.characterClass}
                        </div>
                    ))}
                </div>
                {/* Add other components or content as needed */}
            </div>
        </Layout>
    )
}

export default Legion;