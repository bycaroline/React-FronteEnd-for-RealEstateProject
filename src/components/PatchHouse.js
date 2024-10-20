import React from 'react'
import { useState } from 'react';
import { patchHouseData } from '../services/api';


function PatchHouse({ houseId }) {
    const [showInputs, setShowInputs] = useState(false);
    const [name, setName] = useState('');

    const handleClick = () => {
        setShowInputs(!showInputs);
    }

    const handleSave = async () => {
        try {
            await patchHouseData('/house', houseId, name);
            alert('Husets namn har ändrats');
        } catch (error) {
            console.error('Error att ändra hus', error);
        }
    }

    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-secondary">
                Ändra husets namn
            </button>
            {showInputs && (
                <div>
                    <input
                        type="text"
                        placeholder="Nytt namn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSave} type="button" className="btn btn-primary">
                        Spara ändringar
                    </button>
                </div>
            )}
        </div>
    );
}

export default PatchHouse;