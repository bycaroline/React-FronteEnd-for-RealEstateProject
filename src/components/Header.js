import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate(); // Initiera useNavigate

    const handleCreateClickHouse = () => {
        navigate('/skapahus'); // Navigera till /create
    };

    const handleCreateClickCompany = () => {
        navigate('/skapaforetag'); // Navigera till /create
    };

    return (
        <header>
            <div class="collapse bg-dark" id="navbarHeader">
            </div>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        <strong>Byggföretag och hus</strong>
                    </a>
                    <button onClick={handleCreateClickHouse} type="button" class="btn btn-outline-light">Skapa nytt hus</button>
                    <button onClick={handleCreateClickCompany} type="button" class="btn btn-outline-light">Skapa nytt företag</button>

                </div>
            </div>
        </header>
    )
}

export default Header