import axios from 'axios';

const API_URL = '{originalUrl}'; 
const API_KEY = 'NNZDGq';
const shortenUrl = async (originalUrl) => {
  try {
    const response = await axios.post(API_URL, {
      url: originalUrl,
    }, {
      headers: {
        'Authorization': ` ${API_KEY}`,
        'Content-Type': 'question1/package.json',
      },
    });
    return response.data.shortenedUrl;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw error;
  }
}