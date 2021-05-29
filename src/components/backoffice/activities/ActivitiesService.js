const url = "http://ongapi.alkemy.org/api/activities";

export const getActivities = async () => {
  return await fetch(url, { method: "GET" })
    // .then(res => res.data)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const addActivities = async ( description, name, image) => {
  let date = new Date().toISOString();
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      created_at: date,
      description: description,
      image: image,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 201) {
        return;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

export const onEditActivities = async (
  name,
  created_at,
  description,
  image
) => {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      created_at: created_at,
      description: description,
      image: image,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return "Posted! Great job!";
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong, please try again!");
    });
};

export const onDeleteActivities = async (id) => {
  return await fetch(`${url}/${id}`, { method: "DELETE" })
    .then((res) => res.data)
    .then(() => "Category deleted")
    .catch((err) => console.log(err));
};
