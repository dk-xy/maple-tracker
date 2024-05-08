import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function AddCharacter() {
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
    const onSubmit = (data) => {
        console.log(data)
        const newCharacter = {
            characterName: data.characterName,
            characterClass: data.characterClass,
        };

        // Retrieve existing characters from localStorage
        const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];

        // Add the new character to the existing array
        const updatedCharacters = [...storedCharacters, newCharacter];

        // Store the updated characters back in localStorage
        localStorage.setItem('Characters', JSON.stringify(updatedCharacters));
    }

    useEffect(() => {
        // Get existing Characters from localStorage (if any)
        const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];
        setCharacters(storedCharacters);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="" {...register("characterName", { required: true })} />

            {/* include validation with required or other standard HTML validation rules */}
            <select {...register("characterClass")}>
                <option value="AngelicBuster">Angelic Buster</option>
                <option value="Blaster">Blaster</option>
            </select>
            {/* errors will return when field validation fails 
            {errors.exampleRequired && <span>This field is required</span>} */}

            <input type="submit" />
        </form>
    );
}

export default AddCharacter;