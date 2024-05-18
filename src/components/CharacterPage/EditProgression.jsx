
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

  // const [isVanishingJourneyChecked, setIsVanishingJourneyChecked] = useState(false);
  // const [isChuChuIslandChecked, setIsChuChuIslandChecked] = useState(false);


  const isVanishingJourneyActive = progression[characterId]?.progression?.arcaneRiver?.regions?.vanishingJourney?.isActive || false;
  const [isVanishingJourneyChecked, setIsVanishingJourneyChecked] = useState(isVanishingJourneyActive);

  const isChuChuIslandActive = progression[characterId]?.progression?.arcaneRiver?.regions?.chuChuIsland?.isActive || false;
  const [isChuChuIslandChecked, setIsChuChuIslandChecked] = useState(isChuChuIslandActive);

  // useEffect(() => {
  //   if (progression[characterId]?.progression?.arcaneRiver) {
  //     setProgression(prevProgression => {
  //       const newProgression = { ...prevProgression };
  //       newProgression[characterId].progression.arcaneRiver.regions.vanishingJourney.isActive = isVanishingJourneyChecked;
  //       newProgression[characterId].progression.arcaneRiver.regions.chuChuIsland.isActive = isChuChuIslandChecked;
  //       return newProgression;
  //     });
  //   }
  // }, [isVanishingJourneyChecked, isChuChuIslandChecked]);

  useEffect(() => {
    const newProgression = { ...progression };
    if (newProgression[characterId]?.progression?.arcaneRiver) {
      newProgression[characterId].progression.arcaneRiver.regions.vanishingJourney.isActive = isVanishingJourneyChecked;
      newProgression[characterId].progression.arcaneRiver.regions.chuChuIsland.isActive = isChuChuIslandChecked;
    } else {
      newProgression[characterId] = progression[characterId];
    }
    localStorage.setItem('Progression', JSON.stringify(newProgression));
  }, [isVanishingJourneyChecked, isChuChuIslandChecked]);

  // useEffect(() => {
  //   setProgression(prevProgression => {
  //     const newProgression = { ...prevProgression };
  //     if (newProgression[characterId]?.progression?.arcaneRiver) {
  //       newProgression[characterId].progression.arcaneRiver.regions.vanishingJourney.isActive = isVanishingJourneyChecked;
  //       newProgression[characterId].progression.arcaneRiver.regions.chuChuIsland.isActive = isChuChuIslandChecked;
  //     } else {
  //       newProgression[characterId] = progression[characterId];
  //     }
  //     return newProgression;
  //   });
  // }, [isVanishingJourneyChecked, isChuChuIslandChecked]);



  // useEffect(() => {
  //   setProgression(prevProgression => {
  //     const newProgression = { ...prevProgression };
  //     if (newProgression[characterId]?.progression?.arcaneRiver) {
  //       // newProgression[characterId].progression.arcaneRiver.isActive = isChecked;
  //       // Set the completion status for each region based on the checkbox state
  //       newProgression[characterId].progression.arcaneRiver.regions.vanishingJourney.isActive = isVanishingJourneyChecked;
  //       newProgression[characterId].progression.arcaneRiver.regions.chuChuIsland.isActive = isChuChuIslandChecked;
  //       // Add more regions as needed
  //     } else {
  //       newProgression[characterId] = progression[characterId];
  //       // newProgression[characterId] = {
  //       //   characterId,
  //       //   progression: {
  //       //     arcaneRiver: {
  //       //       isActive: true, // This indicates whether the Arcane River progression is active or not
  //       //       regions: {
  //       //         vanishingJourney: {
  //       //           name:"Oblivion",
  //       //           isActive: false, // This indicates whether the Vanishing Journey region is active or not
  //       //           completion: {
  //       //             daily: false,
  //       //             weekly: false
  //       //           }
  //       //         },
  //       //         chuChuIsland: {
  //       //           name:"Chu Chu",
  //       //           isActive: false, // This indicates whether the Chu Chu Island region is active or not
  //       //           completion: {
  //       //             daily: false,
  //       //             weekly: false
  //       //           }
  //       //         },
  //       //         // Add more regions as needed
  //       //       }
  //       //     }
  //       //     // Rest of the progression object
  //       //   },
  //       // };
  //     }
  //     return newProgression;
  //   });
  // }, [characterId, isChecked, isVanishingJourneyChecked, isChuChuIslandChecked]); // Add more dependencies as needed



  return (
    <div className="editProgression">
      EDIT PROGRESSION HERE

      <label>Oblivion
        <input type="checkbox" checked={isVanishingJourneyChecked} onChange={e => setIsVanishingJourneyChecked(e.target.checked)} />
      </label>
      <label>ChuChu
        <input type="checkbox" checked={isChuChuIslandChecked} onChange={e => setIsChuChuIslandChecked(e.target.checked)} />
      </label>
      {/* <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        
        Arcane River is active */}

      <div>

        {/* Add similar checkboxes for daily and weekly */}
      </div>
      {/* Add similar section for ChuChu */}
    </div>



  )
}

export default EditProgression;