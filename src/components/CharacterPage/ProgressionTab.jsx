import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';

function ProgressionTab({ character }) {
  const [progression, setProgression] = useLocalStorage('Progression', {});
  const progressionId = character.id;

  useEffect(() => {
    // Check if an object with the same characterId exists
    if (!progression[progressionId]) {
      // Set initial progression data for the specific characterId
      const initialProgression = {
        characterId: progressionId,
        // Other properties specific to this character...
      };
      setProgression({ ...progression, [progressionId]: initialProgression });
    }
  }, [progression, progressionId]);

  const linkName = "edit-progression";

  return (
    <div className="progressionTab">
      <div>PROG TAB</div>
      <Link to={linkName} state={{ progression: progression }}>EDIT</Link>
    </div>
  );
}

export default ProgressionTab;