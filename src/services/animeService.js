import axios from 'axios';

const ANIME_API_ENDPOINT = process.env.REACT_APP_BACKEND_HOST + '/anime_title';

export const fetchAnimeTitles = async (pageNumber, limit = 20) => {
    try {
        const response = await axios.get(ANIME_API_ENDPOINT, {
            params: {
                page: pageNumber,
                limit: limit,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching anime titles:', error);
        throw error;
    }
};
