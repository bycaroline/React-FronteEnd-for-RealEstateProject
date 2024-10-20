import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
import DeleteCompany from './DeleteCompany';
import PatchCompany from './PatchCompany';

function AllCompanies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companyData = await getData('/company');
                setCompanies(companyData);
            } catch (error) {
                console.error('Error fetching houses:', error);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div style={{ width: '300px', margin: '0 auto', textAlign: 'center' }} >
            <h1 style={{ marginTop: '40px' }}>Alla byggföretag</h1>
            <ul ul class="list-group">
                {companies.length > 0 ? (
                    companies.map((company, index) => (
                        <li li class="list-group-item" key={company.id || index}>
                            <p>Namn: {company.name}</p>
                            <p>Address: {company.location}</p>
                            <DeleteCompany companyId={company.id} />
                            <PatchCompany companyId={company.id} />
                        </li>

                    ))
                ) : (
                    <li>Inga hus</li>
                )}
            </ul>
        </div>
    );
}

export default AllCompanies;