import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

export const getData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};

export const createData = async (endpoint, name, location) => {
    try {
        const response = await api.post(endpoint, {
            name: name,
            location: location
        });
        return response.data;
    }
    catch (error) {
        console.error('Error creating data', error);
        throw error;
    }

}

export const createDataHouse = async (endpoint, name, type, size, cost, readyMade, company) => {
    try {
        const response = await api.post(endpoint, {
            name: name,
            type: type,
            size: size,
            cost: cost,
            readyMade: readyMade,
            company: company
        });
        return response.data;
    }
    catch (error) {
        console.error('Error creating data', error);
        throw error;
    }
}

export const removeCompanyData = async (endpoint, companyId) => {
    try {
        const response = await api.delete(`${endpoint}/${companyId}`); // Inkludera companyId i URL:en
        return response.data;
    }
    catch (error) {
        console.error('Error removing data', error);
        throw error;
    }
}

export const removeHouseData = async (endpoint, houseId) => {
    try {
        const response = await api.delete(`${endpoint}/${houseId}`); // Inkludera companyId i URL:en
        return response.data;
    }
    catch (error) {
        console.error('Error removing data', error);
        throw error;
    }
}

