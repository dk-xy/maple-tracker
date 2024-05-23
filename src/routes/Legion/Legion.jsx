import React, { useState, useEffect } from 'react';
import AddCharacter from '../../components/AddCharacter';
import ResetLegion from '../../components/ResetLegion';
import LegionCard from '../../components/Legion/LegionCard';
import Layout from '../../Layout';
import './legion.css';
import { useLocalStorage } from 'react-use';
import { Outlet } from 'react-router-dom';
import { CharacterContext, ProgressionContext } from '../../contexts/context';
import { useContext } from 'react';





function Legion({ }) {
    // const [characters] = useLocalStorage('Characters', []);
    // const [characters, setCharacters, removeCharacters] = useLocalStorage('Characters', [])
    const { characters, setCharacters, removeCharacters } = useContext(CharacterContext);
    const { progression, setProgression, removeProgression } = useContext(ProgressionContext);
    // let allChars = localStorage.getItem('Characters');
    // setCharacters(JSON.parse(allChars));
    console.log(characters)

    
//  const handleAddCharacter = (characterId, newProgression) => {
//         setProgression(prevProgression => (
//         {
//             ...prevProgression,
//             ...newProgression
//         }));
//     };
    // const handleAddCharacter = (characterId, newProgression) => {
    //     setProgression(prevProgression => {
    //         console.log("PROG")
    //         console.log(prevProgression)
    //       // Create a copy of prevProgression
    //       const updatedProgression = { ...prevProgression };
      
    //       // For each character in newProgression
    //       for (const characterId in newProgression) {
    //         // If the character already exists in prevProgression, merge their progressions
    //         if (updatedProgression[characterId]) {
    //           updatedProgression[characterId] = {
    //             ...updatedProgression[characterId],
    //             ...newProgression[characterId],
    //           };
    //         } else {
    //           // If the character doesn't exist in prevProgression, add them
    //           updatedProgression[characterId] = newProgression[characterId];
    //         }
    //       }
      
    //       return updatedProgression;
    //     });
    //   };

    return (

        <div className="Legion">
            <h1>LEGION</h1>
            <AddCharacter />

            <ResetLegion />
            <div className="legionContainer">
                {characters.length > 0 ? (
                    characters.map((character, index) => (
                        <div className="legionBlock" key={index}>
                            <LegionCard character={character} />
                        </div>
                    ))
                ) : (
                    <p>No characters available.</p>
                )}
            </div>
            <Outlet />
        </div>


    );
}


export default Legion;




// function Legion() {
//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         // Get existing characters from local storage (if any)
//         const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];
//         setCharacters(storedCharacters);

//         // Listen for changes in local storage
//         const handleStorageChange = (e) => {
//             if (e.key === 'Characters') {
//                 const updatedCharacters = JSON.parse(e.newValue) || [];
//                 setCharacters(updatedCharacters);
//                 console.log('Characters updated:', updatedCharacters);
//             }
//         };

//         window.addEventListener('storage', handleStorageChange);

//         // Clean up the event listener when component unmounts
//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);



//     return (
//         <Layout>
//             <div className="Legion">
//                 <h1>LEGION</h1>
//                 <AddCharacter />
//                 <ResetLegion />

//                 <div className="legionContainer">
//                     {characters.map((character, index) => (
//                         <div className="legionBlock" key={index}>
//                             <LegionCard character={character} />
//                         </div>
//                     ))}
//                 </div>
//                 {/* Add other components or content as needed */}
//             </div>
//         </Layout>
//     );
// }

// export default Legion;



