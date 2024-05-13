import React from 'react';
import { Link } from 'react-router-dom';

const LegionCard = ({ character }) => {
    const id = "/character/" + character.id
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