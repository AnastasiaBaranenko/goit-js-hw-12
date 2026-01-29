
import axios from 'axios';

const VITE_API_KEY = '54276713-c64412dcc235398d3663f989c';

const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page) {
 const response = await axios.get(BASE_URL, {
params:{
key: VITE_API_KEY,
q: query,
image_type: 'photo',
orientation: 'horizontal',
safesearch: true,
page: page,
per_page: 15}})
     return response.data;
}