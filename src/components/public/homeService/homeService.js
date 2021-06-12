
const urlActivities = "http://ongapi.alkemy.org/api/activities";


export const getActivities = async () => {
    return await fetch(urlActivities, { method: "GET" })
  
  
      .then((response) => response.json())
  
      // .then((res) =>console.log(res.data))
  
      .catch((err) => console.log(err));
  };

  export const getActivitiesById = async (id) => {
    return await fetch(`${urlActivities}${id}`, { method: "GET" })
  
  
      .then((response) => response.json())
  
      // .then((res) =>console.log(res.data))
  
      .catch((err) => console.log(err));
  };