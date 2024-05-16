
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useLocation } from 'react-use';

function EditProgression( ) {

const location = useLocation();
// console.log(location.state)
// const progressionState = location.state.usr.progression;
// const characterState = location.state.usr.character;
// console.log(progressionState)
//  // Retrieve the specific progression data based on characterId
// const theProg = progressionState.filter(item => item.characterId.includes(characterState.id))
// console.log(theProg)
// // console.log(progressionArray)
// // // Retrieve the specific progression data based on characterId
// // const specificProgression = progressionArray.find(item => item.characterId === characterState.id);
// console.log(specificProgression)

    return (
        <div className="editProgression">
            EDIT PROGRESSION HERE
            <label>
                <input
                    type="checkbox"
                />
                Arcane River is active
            </label>
            <div>
                <label>
                    <input
                        type="checkbox"
                    />
                    Oblivion is active
                </label>
                {/* Add similar checkboxes for daily and weekly */}
            </div>
            {/* Add similar section for ChuChu */}
        </div>
        


    )
}

export default EditProgression;