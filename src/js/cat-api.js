import axios from 'axios';

const API_CAT_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_6iszEu0HGJyNDekAh2eos6NLSxYhE1QF7jDLVnvxOesTafDnceCG7sCK3Tp8c5hd';

function fetchBreeds() {
    return fetch(`${API_CAT_URL}/breeds`, {
        headers: {'x-api-key': axios.defaults.headers.common['x-api-key'],},
    })
    .then(response => {
        if (!response.ok) {throw new Error(response.status);}
        return response.json();
    });
}

function fetchCatByBreed(breedId) {
    return fetch(`${API_CAT_URL}/images/search?breed_ids=${breedId}`, {
        headers: {'x-api-key': axios.defaults.headers.common['x-api-key'],},
    }).then(response => {
    if (!response.ok) {throw new Error(response.status);}
        return response.json();
    });
}

export { fetchBreeds, fetchCatByBreed };