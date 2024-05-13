// Character.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-use';

// import ProgressionTab from "../../components/ProgressionTab.jsx";
// import BossesTab from "../../components/BossesTab.jsx";
import ProgressionTab from "../../../components/CharacterPage/ProgressionTab"
import BossesTab from "../../../components/CharacterPage/BossesTab"


export default function Character() {
    const location = useLocation();
    // const { characterId } = useParams(); // Assuming you have a character ID
    console.log(location)
    const character = location.state.usr.character
    console.log(character)
    return (
        <div className="character-page">
            {/* Render tabs based on user selection */}
    
            {/* {character === 'progression' ? <ProgressionTab /> : null}
            {character === 'bosses' ? <BossesTab /> : null}  */}
            {/* <button onClick={() => history.push('/character/progression')}>Progression</button>
            <button onClick={() => history.push('/character/bosses')}>Bosses</button> */}
            {character.characterName}
            
        </div>


    );
}

