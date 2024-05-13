// Character.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
// import ProgressionTab from "../../components/ProgressionTab.jsx";
// import BossesTab from "../../components/BossesTab.jsx";
import ProgressionTab from "../../../components/CharacterPage/ProgressionTab"
import BossesTab from "../../../components/CharacterPage/BossesTab"


export default function Character() {
    const { characterId } = useParams(); // Assuming you have a character ID

    return (
        <div className="character-page">
            {/* Render tabs based on user selection */}
            {/* {characterId === 'progression' ? <ProgressionTab /> : null}
            {characterId === 'bosses' ? <BossesTab /> : null} */}

            <button onClick={() => history.push('/character/progression')}>Progression</button>
            <button onClick={() => history.push('/character/bosses')}>Bosses</button>
        </div>


    );
}

