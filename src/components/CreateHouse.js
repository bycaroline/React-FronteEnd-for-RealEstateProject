import React, { useEffect } from 'react'
import { createDataHouse } from '../services/api'
import { useState } from 'react';

function CreateHouse() {
    const [newHouse, setNewHouse] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [cost, setCost] = useState('');
    const [readyMade, setReadyMade] = useState(false);
    const [companyId, setCompanyId] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const houseData = await createDataHouse('/house', name, type, Number(size), Number(cost), readyMade, { id: Number(companyId) })
            setNewHouse(houseData);
            alert('Hus skapat');
        } catch (error) {
            console.error('Error fetching houses:', error);
        }
    }

    return (
        <div>
            <h1>Skapa nytt hus</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Namn'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Typ"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Storlek"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Pris"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <label>
                    Nyckelfärdigt:
                    <input
                        type="checkbox"
                        checked={readyMade}
                        onChange={() => setReadyMade(!readyMade)} // Toggle boolean value
                    />
                </label>
                <input
                    type="text"
                    placeholder="Företags-ID"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                />
                <button type="submit">Skapa</button>
            </form>

        </div>
    )
}

export default CreateHouse;