import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
import DeleteHouse from './DeleteHouse';

function AllHouses() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const houseData = await getData('/house');
                setHouses(houseData);
            } catch (error) {
                console.error('Error fetching houses:', error);
            }
        };

        fetchHouses();
    }, []);

    return (
        <div style={{ width: '300px', margin: '0 auto', textAlign: 'center' }} >
            <h1 style={{ marginTop: '40px' }}>Alla hus</h1>
            <ul ul class="list-group">
                {houses.length > 0 ? (
                    houses.map((house, index) => (
                        <li li class="list-group-item" key={house.id || index}>
                            <p>Namn: {house.name}</p>
                            <p>Typ: {house.type}</p>
                            <p>Storlek i kvm: {house.size}</p>
                            < DeleteHouse houseId={house.id} />
                        </li>
                    ))
                ) : (
                    <li>Inga hus</li>
                )}
            </ul>
        </div>
    );
}

export default AllHouses;