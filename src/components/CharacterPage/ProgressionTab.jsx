import React, { useEffect, useContext, useState } from 'react';
import RegionProgression from './Progression/RegionProgression';
import "./characterStyle.css";
import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../../contexts/context';
import { ProgressionContext } from '../../contexts/context';

function ProgressionTab({ character }) {

  const { characters, setCharacters, removeCharacters } = useContext(CharacterContext);
  const { progression, setProgression, removeProgression } = useContext(ProgressionContext);
  const vanishingJourney = progression[character.id]?.progression?.arcaneRiver?.regions?.vanishingJourney;
  const [completion, setCompletion] = useState(vanishingJourney?.completion || { daily: false, weekly: false });

  const progressionData = JSON.parse(localStorage.getItem('Progression')) || {};
  const regions = progressionData[character.id]?.arcaneRiver?.regions || {};
  
  console.log("REGIONS")
  console.log(regions);



  // const handleCompletionChange = (regionName, newCompletion) => {
  //   setProgression(prevProgression => {
  //     const newProgression = { ...prevProgression };
  //     newProgression[character.id].progression.arcaneRiver.regions[regionName].completion = newCompletion;
  //     return newProgression;
  //   });
  // };

  const handleCompletionChange = (regionName, newCompletion) => {
    setProgression(prevProgression => {
      const newProgression = { ...prevProgression };
      const newRegion = { ...newProgression[character.id].progression.arcaneRiver.regions[regionName], completion: newCompletion };
      newProgression[character.id].progression.arcaneRiver.regions[regionName] = newRegion;
      return newProgression;
    });
  };

  // const linkName = "edit-progression";

  (console.log(progression[character.id]));

  const isEmptyProgression = Object.keys(progression).length === 1 && progression.characterId;

  return (
    <div className="progressionTab">
      <div>PROG TAB</div>

      <div class="regionContainer">
        {regions && Object.entries(regions).map(([regionName, region]) => (
          region.isActive &&
          <RegionProgression
            key={regionName}
            regionName={region.name}
            regionClass={region.class}
            completion={region.completion || { daily: false, weekly: false }}
            setCompletion={newCompletion => handleCompletionChange(regionName, newCompletion)}
            character={character}
          />
        ))}
      </div>

    </div>
  );
}

export default ProgressionTab;