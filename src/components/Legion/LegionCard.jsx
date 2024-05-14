import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const LegionCard = ({ character }) => {
    const id = "/legion/" + character.id
    // const { userId } = useParams();
    return (
        <div className='legionCard'>
            <Link to={id} state={{character: character}}>LINK</Link>
            {/* Display character details */}
            <div>
                Character Name: {character.characterName}

            </div>
            {/* Add other character details as needed */}
          
        </div>
        
    );
};

export default LegionCard;