import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function ResetLegion(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()




    // // Retrieve existing characters from localStorage
    // const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];

    const onSubmit = (data) => {
        props.removeCharacters()
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