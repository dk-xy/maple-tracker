import React, { useEffect, useContext } from 'react';

import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../../contexts/context';

function ProgressionTab({ character, progression, setProgression }) {

  const { characters, setCharacters, removeCharacters} = useContext(CharacterContext);

  // const linkName = "edit-progression";

(console.log(progression[character.id]));

const isEmptyProgression = Object.keys(progression).length === 1 && progression.characterId;

  return (
    <div className="progressionTab">
      <div>PROG TAB</div>
      {/* <Link to={linkName} state={{character: character, progression: progression } }>EDIT</Link> */}
    </div>
  );
}

export default ProgressionTab;