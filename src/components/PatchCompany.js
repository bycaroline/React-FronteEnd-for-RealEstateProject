import React from 'react'
import { useState } from 'react';
import { patchCompanyData } from '../services/api';


function PatchCompany({ companyId }) {
    const [showInputs, setShowInputs] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleClick = () => {
        setShowInputs(!showInputs);
    }

    const handleSave = async () => {
        try {
            await patchCompanyData('/company', companyId, name, location);
            alert('Företaget har ändrats');
        } catch (error) {
            console.error('Error att ändra företag', error);
        }
    }

    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-secondary">
                Ändra företagets namn
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

export default PatchCompany;