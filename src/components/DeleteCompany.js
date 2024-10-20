import React from 'react'
import { removeCompanyData } from '../services/api'

function DeleteCompany({ companyId }) {

    const handleClick = async () => {
        try {
            await removeCompanyData('/company', companyId);
            alert('Företaget har tagits bort');
        } catch (error) {
            console.error('Error att ta bort företag')
        }

    }

    return (
        <div>
            <button onClick={() => handleClick()} type="button" className="btn btn-info">
                Ta bort företag
            </button>
        </div>
    )
}

export default DeleteCompany

