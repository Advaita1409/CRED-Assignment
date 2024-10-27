// src/services/StackService.ts
import axios from 'axios';
import { StackItem } from '../models/StackItem';

const API_ENDPOINT = 'https://api.example.com/stack'; // Replace with your mock API URL

export const fetchStackData = async (): Promise<StackItem[]> => {
const response = await axios.get(API_ENDPOINT);
return response.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    isExpanded: false
}));
};