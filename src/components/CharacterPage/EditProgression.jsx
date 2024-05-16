
import React, { useState, useEffect, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { useLocation } from 'react-use';
import { ProgressionContext } from '../../contexts/context';

function EditProgression() {

    const setProgression = useContext(ProgressionContext);
    const location = useLocation();

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isChecked) {
            console.log("CHECKED")
            setProgression(prevProgression => ({
                ...prevProgression,
                [location.state.usr.character.id]: {
                    characterId: location.state.usr.character.id,
                    progression: {
                        arcaneRiver: true,
                        // Add other progression fields here
                    }
                }
            }));
        }
    }, [isChecked, setProgression, location.state.usr.character.id]);

    console.log(location.state.usr.character)
    console.log(location.state.usr.progression)
    return (
        <div className="editProgression">
            EDIT PROGRESSION HERE
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
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