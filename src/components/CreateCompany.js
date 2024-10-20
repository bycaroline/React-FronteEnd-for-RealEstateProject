import React, { useEffect } from 'react'
import { createData } from '../services/api'
import { useState } from 'react';

function CreateCompany() {
    const [newCompany, setNewCompany] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const companyData = await createData('/company', name, location)
            setNewCompany(companyData);
            alert('Företag skapat');
            setName('');
            setLocation('');
        } catch (error) {
            console.error('Error fetching houses:', error);
        }
    }

    return (
        <div>
            <h1>Skapa nytt företag</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='namn'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    placeholder='adress'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <button type="submit">Skapa</button>
            </form>

        </div>
    )
}

export default CreateCompany