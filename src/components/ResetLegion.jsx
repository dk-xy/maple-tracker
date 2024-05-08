import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function ResetLegion() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()



    // Initialize state variables
    const [characterName, setCharacterName] = useState('characterName');
    const [characterClass, setCharacterClass] = useState('characterClass');
    const [Characters, setCharacters] = useState([]);

    const newCharacter = {
        characterName,
        characterClass,
    };

    // Retrieve existing characters from localStorage
    const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];


    const onSubmit = (data) => {
        localStorage.removeItem('Characters');
        useEffect(() => {
            // Get existing Characters from localStorage (if any)
            const storedCharacters = JSON.parse(localStorage.removeItem('Characters')) || [];
            setCharacters(storedCharacters);
        }, []);

        // Add the new character to the existing array
        const updatedCharacters = [...storedCharacters, newCharacter];


    };




    // Store the updated characters back in localStorage



    return (
        <button onClick={handleSubmit(onSubmit)}>
            reset
        </button>
    );

}





export default ResetLegion;