import axios from 'axios';
import {API_KEY, BASE_URL} from '../api/apiConfig';

export const fetchQuestions = async (topic, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`, {
      params: {
        site: 'stackoverflow',
        tagged: topic,
        sort: 'hot',
        page: page,
        pagesize: 10,
        key: API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
