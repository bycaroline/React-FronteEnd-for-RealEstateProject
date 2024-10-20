import React from 'react'
import { useState } from 'react';

function PatchCompany({ companyId }) {

    const [showInputs, setShowInputs] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleClick = () => {
        setShowInputs(!showInputs);
    }

    const handleSave = () => {

        console.log('Nytt namn:', name, 'Ny plats:', location);

    }
    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-secondary">
                Ändra företag
            </button>
            {showInputs && (
                <div>
                    <input
                        type="text"
                        placeholder="Nytt namn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Ny plats"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button onClick={handleSave} type="button" className="btn btn-primary">
                        Spara ändringar
                    </button>
                </div>
            )}
        </div>
    )
}

export default PatchCompany

