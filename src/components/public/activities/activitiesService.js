import axios from "axios";

export const getActivities = async () => {
  try {
    const response = await axios.get("http://ongapi.alkemy.org/api/activities");
    return response.data.data;
  } catch (error) {
    return error;
  }
};
