import React, { useEffect, useContext, useState } from 'react';
import RegionProgression from './Progression/RegionProgression';

import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../../contexts/context';

function ProgressionTab({ character, progression, setProgression }) {

  const { characters, setCharacters, removeCharacters} = useContext(CharacterContext);
  const vanishingJourney = progression[character.id]?.progression?.arcaneRiver?.regions?.vanishingJourney;
  const [completion, setCompletion] = useState(vanishingJourney?.completion || { daily: false, weekly: false });

  const handleCompletionChange = (newCompletion) => {
    setCompletion(newCompletion);
    setProgression(prevProgression => {
      const newProgression = { ...prevProgression };
      newProgression[character.id].progression.arcaneRiver.regions.vanishingJourney.completion = newCompletion;
      return newProgression;
    });
  };

  // const linkName = "edit-progression";

(console.log(progression[character.id]));

const isEmptyProgression = Object.keys(progression).length === 1 && progression.characterId;

  return (
    <div className="progressionTab">
      <div>PROG TAB</div>
      {/* <Link to={linkName} state={{character: character, progression: progression } }>EDIT</Link> */}

      {vanishingJourney?.isActive && <RegionProgression completion={completion} setCompletion={handleCompletionChange} />}
    </div>
  );
}

export default ProgressionTab;