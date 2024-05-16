// Character.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocation, useLocalStorage } from 'react-use';
import { Outlet } from 'react-router-dom';


// import ProgressionTab from "../../components/ProgressionTab.jsx";
// import BossesTab from "../../components/BossesTab.jsx";
import ProgressionTab from "../../../components/CharacterPage/ProgressionTab"
import BossesTab from "../../../components/CharacterPage/BossesTab"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function Character() {
    const location = useLocation();
    const linkName = "edit-progression";
    // const { characterId } = useParams(); // Assuming you have a character ID
    console.log(location)
    const character = location.state.usr.character
    console.log(character)
    const [progression, setProgression, removeProgression] = useLocalStorage('Progression', {});
    const progressionId = character.id;
    return (
        <div className="character-page">
            <div>{character.characterName}</div>
            <Link to={linkName} state={{character: character, progression: progression } }>EDIT</Link>
            <Tabs>
                <TabList>
                    <Tab>Progression</Tab>
                    <Tab>Bosses</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ProgressionTab character={character} progression={progression} setProgression={setProgression}  />
                    </TabPanel>
                    <TabPanel>
                        <BossesTab character={character} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
       
        </div>





    );
}

