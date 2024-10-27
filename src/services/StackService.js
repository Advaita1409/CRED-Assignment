// src/services/StackService.ts
import axios from 'axios';

const API_ENDPOINT = 'https://api.example.com/stack'; // Replace with your mock API URL

export const fetchStackData = async () => {
const response = await axios.get(API_ENDPOINT);
return response.data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    isExpanded: false,
}));
};