import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { useForm } from 'react-hook-form';
// import { v4 as uuidv4 } from 'uuid';

function AddCharacter(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
              // Find the maximum existing ID
              const maxExistingId = props.characters.reduce((maxId, char) => Math.max(maxId, char.id), 0);

              // Generate a new character with an incremented ID
              const newCharacter = {
                  id: maxExistingId + 1,
                  characterName: data.characterName,
                  characterClass: data.characterClass,
              };
      
              // Always ensure characters is an array
              const updatedCharacters = Array.isArray(props.characters)
                  ? [...props.characters, newCharacter]
                  : [newCharacter];
                  
      
              // Update the characters state
              props.setCharacters(updatedCharacters);
  
    };


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