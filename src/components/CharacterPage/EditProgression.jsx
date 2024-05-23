import React, { useState, useEffect, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { useLocation } from 'react-use';
import { ProgressionContext } from '../../contexts/context';

// function EditProgression() {

//   const [progression, setProgression] = useState(JSON.parse(localStorage.getItem('Progression')) || {});
//   const location = useLocation();
//   const characterId = location.state.usr.character.id;

//   const isArcaneRiverActive = progression[characterId]?.progression?.arcaneRiver || false;
//   const [isChecked, setIsChecked] = useState(isArcaneRiverActive);

//   const isVanishingJourneyActive = progression[characterId]?.progression?.arcaneRiver?.regions?.vanishingJourney?.isActive || false;
//   const [isVanishingJourneyChecked, setIsVanishingJourneyChecked] = useState(isVanishingJourneyActive);

//   const isChuChuIslandActive = progression[characterId]?.progression?.arcaneRiver?.regions?.chuChuIsland?.isActive || false;
//   const [isChuChuIslandChecked, setIsChuChuIslandChecked] = useState(isChuChuIslandActive);

//   useEffect(() => {
//     if (progression[characterId]?.progression?.arcaneRiver?.regions) {
//       setIsVanishingJourneyChecked(progression[characterId].progression.arcaneRiver.regions.vanishingJourney?.isActive || false);
//       setIsChuChuIslandChecked(progression[characterId].progression.arcaneRiver.regions.chuChuIsland?.isActive || false);
//     }
//   }, [characterId, progression]);
//   const handleCheckboxChange = (region, isChecked) => {
//     setProgression(prevProgression => {
//       const newProgression = { ...prevProgression };
//       if (!newProgression[characterId]) {
//         newProgression[characterId] = { progression: { arcaneRiver: { regions: {} } } };
//       } else if (!newProgression[characterId].progression) {
//         newProgression[characterId].progression = { arcaneRiver: { regions: {} } };
//       } else if (!newProgression[characterId].progression.arcaneRiver) {
//         newProgression[characterId].progression.arcaneRiver = { regions: {} };
//       } else if (!newProgression[characterId].progression.arcaneRiver.regions) {
//         newProgression[characterId].progression.arcaneRiver.regions = {};
//       } else if (!newProgression[characterId].progression.arcaneRiver.regions[region]) {
//         newProgression[characterId].progression.arcaneRiver.regions[region] = {};
//       }
//       newProgression[characterId].progression.arcaneRiver.regions[region].isActive = isChecked;
//       localStorage.setItem('Progression', JSON.stringify(newProgression));
//       return newProgression;
//     });
//   };
//   return (
//     <div className="editProgression">
//       EDIT PROGRESSION HERE

//       <label>Oblivion
//       <input 
//         type="checkbox" 
//         checked={isVanishingJourneyChecked} 
//         onChange={e => handleCheckboxChange('vanishingJourney', e.target.checked)} 
//       />
//     </label>
//     <label>ChuChu
//       <input 
//         type="checkbox" 
//         checked={isChuChuIslandChecked} 
//         onChange={e => handleCheckboxChange('chuChuIsland', e.target.checked)} 
//       />
//     </label>
//   </div>
//   );
// }

// export default EditProgression;


const EditProgression = () => {
  const location = useLocation();
  const characterId = location.state.usr.character.id;

  const initialProgression = JSON.parse(localStorage.getItem('Progression')) || {};
  const [progression, setProgression] = useState(initialProgression);

  const isRegionActive = (region) => {
    return progression[characterId]?.arcaneRiver?.regions?.[region]?.isActive || false;
  }


  const handleCheckboxChange = (region, isChecked) => {
    setProgression(prevProgression => {
      const newProgression = JSON.parse(JSON.stringify(prevProgression)); // Deep copy
      const targetRegion = newProgression[characterId]?.arcaneRiver?.regions?.[region];
  
      if (targetRegion) {
        targetRegion.isActive = isChecked;
      } else {
        // If the region doesn't exist, create it with default properties
        newProgression[characterId] = newProgression[characterId] || { arcaneRiver: { isActive: true, regions: {} } };
        newProgression[characterId].arcaneRiver.regions[region] = {
          name: region === 'vanishingJourney' ? 'Oblivion' : 'Chu Chu',
          class: region,
          isActive: isChecked,
          completion: {
            daily: false,
            weekly: false
          }
        };
      }
  
      localStorage.setItem('Progression', JSON.stringify(newProgression));
      return newProgression;
    });
  };

  return (
    <div className="editProgression">
      EDIT PROGRESSION HERE

      <label>Oblivion
        <input 
          type="checkbox" 
          checked={isRegionActive('vanishingJourney')}
          onChange={e => handleCheckboxChange('vanishingJourney', e.target.checked)}
        />
      </label>

      <label>Chu Chu
        <input 
          type="checkbox" 
          checked={isRegionActive('chuChuIsland')}  
          onChange={e => handleCheckboxChange('chuChuIsland', e.target.checked)}
        />
      </label>
    </div>
  );
};

export default EditProgression;