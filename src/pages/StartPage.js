import React from 'react'
import Header from '../components/Header'
import AllHouses from '../components/AllHouses'
import AllCompanies from '../components/AllCompanies'

function StartPage() {
    return (
        <div>
            <Header />
            <AllHouses />
            <AllCompanies />
        </div>
    )
}

export default StartPage