// Character.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-use';
import { Outlet } from 'react-router-dom';

// import ProgressionTab from "../../components/ProgressionTab.jsx";
// import BossesTab from "../../components/BossesTab.jsx";
import ProgressionTab from "../../../components/CharacterPage/ProgressionTab"
import BossesTab from "../../../components/CharacterPage/BossesTab"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function Character() {
    const location = useLocation();
    // const { characterId } = useParams(); // Assuming you have a character ID
    console.log(location)
    const character = location.state.usr.character
    console.log(character)
    return (
        <div className="character-page">
            {character.characterName}
            <Tabs>
                <TabList>
                    <Tab>Progression</Tab>
                    <Tab>Bosses</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ProgressionTab character={character} />
                    </TabPanel>
                    <TabPanel>
                        <BossesTab character={character} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Outlet />
        </div>





    );
}

