
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useLocation } from 'react-use';






function EditProgression( ) {

    const [progressionTracking, setProgressionTracking] = useLocalStorage('ProgressionTracking', []); // Only retrieve progression, not setProgression

    
const location = useLocation();
console.log(location.state)
const progressionSTate = location.state.usr;


    const arcaneRiver = {
        isActive: Boolean,
        regions: {
            Oblivion: {
                isActive: Boolean,
                daily: Boolean,
                weekly: Boolean,
            },
            ChuChu: {
                isActive: Boolean,
                daily: Boolean,
                weekly: Boolean,
            }
        }
    }

     // Handle checkbox changes
     const handleCheckboxChange = (region, type) => {

        setProgressionTracking((prevArcaneRiver) => ({
            ...prevArcaneRiver,
            regions: {
                ...prevArcaneRiver.regions,
                [region]: {
                    ...prevArcaneRiver.regions[region],
                    [type]: !prevArcaneRiver.regions[region][type],
                },
            },
        }));
    };


    return (
        <div className="editProgression">
            EDIT PROGRESSION HERE
            <label>
                <input
                    type="checkbox"
                    checked={arcaneRiver.isActive}
                    onChange={() => handleCheckboxChange('isActive', 'isActive')}
                />
                Arcane River is active
            </label>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={arcaneRiver.regions.Oblivion.isActive}
                        onChange={() => handleCheckboxChange('Oblivion', 'isActive')}
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