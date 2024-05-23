import React, { useEffect, useState, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { useForm } from 'react-hook-form';
// import { v4 as uuidv4 } from 'uuid';
import { ProgressionContext } from '../contexts/context';
import { CharacterContext } from '../contexts/context';

function AddCharacter( ) {
    const { characters, setCharacters } = useContext(CharacterContext);
    const { progression, setProgression} = useContext(ProgressionContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // useEffect(() => {
    //     if (characters.length > 0) {
    //         const newCharacter = characters[characters.length - 1];
    //         const newProgression = {
    //             [newCharacter.id]: {
    //                 arcaneRiver: {
    //                     isActive: true,
    //                     regions: {
    //                         vanishingJourney: {
    //                             name:"Oblivion",
    //                             class:"oblivion",
    //                             isActive: false,
    //                             completion: {
    //                                 daily: false,
    //                                 weekly: false
    //                             }
    //                         },
    //                         chuChuIsland: {
    //                             name:"Chu Chu",
    //                             class:"chuchu",
    //                             isActive: false,
    //                             completion: {
    //                                 daily: false,
    //                                 weekly: false
    //                             }
    //                         },
    //                     }
    //                 },
    //             },
    //         };

    //         setProgression(prevProgression => ({
    //             ...prevProgression,
    //             ...newProgression
    //         }));
    //     }
    // }, [characters]);
    
    const onSubmit = (data) => {
        // Find the maximum existing ID
        let maxExistingId = 0;
        if (Array.isArray(characters) && characters.length > 0) {
            maxExistingId = characters.reduce((maxId, char) => Math.max(maxId, char.id), 0);
        } else {
            maxExistingId = 0;
        }
        
        // Generate a new character with an incremented ID
        const newCharacter = {
            id: maxExistingId + 1,
            characterName: data.characterName,
            characterClass: data.characterClass,
        };
    
        // Always ensure characters is an array
        const updatedCharacters = Array.isArray(characters)
            ? [...characters, newCharacter]
            : [newCharacter];
    
        setCharacters(updatedCharacters);
    
        // Retrieve existing progression from localstorage
        const existingProgression = JSON.parse(localStorage.getItem('Progression')) || {};
        const newProgression = {
            [newCharacter.id]: {
                arcaneRiver: {
                    isActive: true,
                    regions: {
                        vanishingJourney: {
                            name:"Oblivion",
                            class:"oblivion",
                            isActive: false,
                            completion: {
                                daily: false,
                                weekly: false
                            }
                        },
                        chuChuIsland: {
                            name:"Chu Chu",
                            class:"chuchu",
                            isActive: false,
                            completion: {
                                daily: false,
                                weekly: false
                            }
                        },
                    }
                },
            },
        };
        // Merge existing progression with new progression
        const updatedProgression = {
            ...existingProgression,
            ...newProgression
        };
    
        // Store updated progression back to localstorage
        localStorage.setItem('Progression', JSON.stringify(updatedProgression));
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