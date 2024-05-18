import React, { useEffect, useState, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { useForm } from 'react-hook-form';
// import { v4 as uuidv4 } from 'uuid';
import { ProgressionContext } from '../contexts/context';
import { CharacterContext } from '../contexts/context';

function AddCharacter({ onAddCharacter }) {
    const { characters, setCharacters } = useContext(CharacterContext);
    const {progression, setProgression} = useContext(ProgressionContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // Generate a new progression object for the new character


    console.log("THIS IS LEGION")
    console.log(characters)
    const onSubmit = (data) => {
        let maxExistingId = 0;
        if (Array.isArray(characters) && characters.length > 0) {
            maxExistingId = characters.reduce((maxId, char) => Math.max(maxId, char.id), 0);
        } else {
            maxExistingId = 0;
        }
        // Find the maximum existing ID


        // Generate a new character with an incremented ID
        const newCharacter = {
            id: maxExistingId + 1,
            characterName: data.characterName,
            characterClass: data.characterClass,
        };

        // Always ensure characters is an array

        // Always ensure characters is an array
        const updatedCharacters = Array.isArray(characters)
            ? [...characters, newCharacter]
            : [newCharacter];

        const newProgression = {
            characterId: newCharacter.id,
            progression: {
                arcaneRiver: {
                    isActive: true, // This indicates whether the Arcane River progression is active or not
                    regions: {
                      vanishingJourney: {
                        name:"Oblivion",
                        class:"oblivion",
                        isActive: false, // This indicates whether the Vanishing Journey region is active or not
                        completion: {
                          daily: false,
                          weekly: false
                        }
                      },
                      chuChuIsland: {
                        name:"Chu Chu",
                        class:"chuchu",
                        isActive: false, // This indicates whether the Chu Chu Island region is active or not
                        completion: {
                          daily: false,
                          weekly: false
                        }
                      },
                      // Add more regions as needed
                    }
                  }
                  // Rest of the progression object
                            },
        };

        setCharacters(updatedCharacters);
        onAddCharacter(newCharacter.id, newProgression);

        
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