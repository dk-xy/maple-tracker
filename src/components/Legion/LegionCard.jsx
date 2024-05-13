import React from 'react';

const LegionCard = ({ character }) => {
    return (
        <div className='legionCard'>
            {/* Display character details */}
            <div>
                Character Name: {character.characterName}
                
            </div>
            {/* Add other character details as needed */}
        </div>
    );
};

export default LegionCard;