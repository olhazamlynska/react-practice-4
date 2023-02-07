import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf';

export const fetchStatus = async () => {
  try {
    const res = await axios('/api');
    return res.data.answer;
  } catch (error) {
    console.log(error);
  }
};
