
import React, { useState, useEffect, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { useLocation } from 'react-use';
import { ProgressionContext } from '../../contexts/context';

function EditProgression() {

  const { progression, setProgression } = useContext(ProgressionContext);
  const location = useLocation();
  // const progression = location.state.usr.progression;
  const characterId = location.state.usr.character.id;
  const isArcaneRiverActive = progression[characterId]?.progression?.arcaneRiver || false;
  const [isChecked, setIsChecked] = useState(isArcaneRiverActive);





  useEffect(() => {
    setProgression(prevProgression => {
      const newProgression = { ...prevProgression };
      if (newProgression[characterId]?.progression?.arcaneRiver) {
        newProgression[characterId].progression.arcaneRiver.isActive = isChecked;
      } else {
        newProgression[characterId] = {
          characterId,
          progression: {
            arcaneRiver: {
              isActive: isChecked,
              completion: {
                vanishingJourney: false,
                chuChuIsland: false,
                lachelein: false,
                arcana: false,
                morass: false,
                esfera: false,
                moonbridge: false
              }
            },
            Grandis: {
              isActive: false,
              completion: {
                cernium: false,
                arcus: false,
                odium: false,
                shangrila: false,
                arteria: false,
                carcion: false
              }
            }
          },
        };
      }
      return newProgression;
    });
  }, [isChecked, setProgression, characterId]);

  // useEffect(() => {

  //   // console.log(progression);
  //   if (isChecked) {
  //     setProgression(prevProgression => ({
  //       ...prevProgression,
  //       [characterId]: {
  //         characterId,
  //         progression: {
  //           ...prevProgression[characterId]?.progression,
  //           arcaneRiver: true,
  //         },
  //       },
  //     }));
  //   } else {
  //     setProgression(prevProgression => ({
  //       ...prevProgression,
  //       [characterId]: {
  //         characterId,
  //         progression: {
  //           ...prevProgression[characterId]?.progression,
  //           arcaneRiver: false,
  //         },
  //       },
  //     }));
  //   }
  // }, [isChecked, setProgression, characterId]);












  // useEffect(() => {
  //   setProgression(prevProgression => ({
  //     ...prevProgression,
  //     [characterId]: {
  //       characterId,
  //       progression: {
  //         ...prevProgression[characterId]?.progression,
  //         arcaneRiver: isChecked,
  //       },
  //     },
  //   }));
  // }, [isChecked, setProgression, characterId]);

  // useEffect(() => {
  //   setProgression(prevProgression => {
  //     const newProgression = { ...prevProgression };
  //     if (newProgression[characterId]) {
  //       newProgression[characterId].progression.arcaneRiver = isChecked;
  //     } else {
  //       newProgression[characterId] = {
  //         characterId,
  //         progression: {
  //           arcaneRiver: isChecked,
  //         },
  //       };
  //     }
  //     return newProgression;
  //   });
  // }, [isChecked, setProgression, characterId]);

  // console.log(location.state.usr.character)
  // console.log(location.state.usr.progression)
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