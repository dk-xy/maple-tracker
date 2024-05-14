// bosstab.jsx
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';


function ProgressionTab( ) {
    const [progression] = useLocalStorage('Progression', []); // Only retrieve progression, not setProgression

    const charId = "edit-progression"
    return (
            <div className="progressionTab">
                <div>
                PROG TAB 
                </div>
                <Link to={charId}  state={{progression: progression}}>EDIT</Link>  
            </div>

    )
}

export default ProgressionTab;