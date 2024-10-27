const API_URL = 'YOUR_MOCK_API_ENDPOINT';

export const fetchStackData = async () => {
try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching stack data:', error);
    return [];
}
};