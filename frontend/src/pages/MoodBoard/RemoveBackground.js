import axios from 'axios';

const removeBackground = async (imageFile) => {
  const formData = new FormData();
  formData.append('image_file', imageFile);
  formData.append('size', 'auto');

  try {
    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        'X-Api-Key': 'LQmGcYWC6zBw8wVqWswPCjkK', // Replace with your remove.bg API key
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    });

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Error removing background:', error.response ? error.response.data : error.message);
    return null;
  }
};

export default removeBackground;
