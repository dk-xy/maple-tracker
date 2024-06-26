import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CharacterContext, ProgressionContext } from '../contexts/context';



function ResetLegion() {
    
    const { characters, setCharacters, removeCharacters } = useContext(CharacterContext);
    const { progression, setProgression, removeProgression } = useContext(ProgressionContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    // // Retrieve existing characters from localStorage
    // const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];

    const onSubmit = (data) => {
        removeCharacters();
        setCharacters([]);
        removeProgression();
        // Add the new character to the existing array
        // const updatedCharacters = [...storedCharacters, newCharacter];
    };


    return (
        <button onClick={handleSubmit(onSubmit)}>
            reset
        </button>
    );

}


export default ResetLegion;