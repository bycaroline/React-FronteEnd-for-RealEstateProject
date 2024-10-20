import React from 'react'
import { removeHouseData } from '../services/api'

function DeleteHouse({ houseId }) {

    const handleClick = async () => {
        try {
            await removeHouseData('/house', houseId);
            alert('Huset har tagits bort');
        } catch (error) {
            console.error('Error att ta bort hus')
        }

    }

    return (
        <div>
            <button onClick={() => handleClick()} type="button" className="btn btn-info">
                Ta bort hus
            </button>
        </div>
    )
}

export default DeleteHouse

