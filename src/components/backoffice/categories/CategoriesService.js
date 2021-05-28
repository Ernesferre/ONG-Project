const url='http://ongapi.alkemy.org/api/categories'

//   LIST OF CATEGORIES
export const getCategories = () => {
    return fetch(url, {method: 'GET'})
    // .then(res => res.data)
    .then(response => response.json())
    .catch(err => console.log(err))
}
// ordenar por id y obtener el mas alto para usarlo al crear

//   CREATE CATEGORY
export function createCategory(values) {

    let date = new Date().toISOString()

    const newCategory = {
        "id": 0,
        "name": values.name,
        "description": values.description,
        "image": values.image,
        "parent_category_id": 0,
        "created_at": date,
        "updated_at": date,
        "deleted_at": null
      }
  
      return fetch(url, {
          method: 'POST',
          body: JSON.stringify(newCategory),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
          return 'Posted! Great job!'
      })
      .catch(err => {
          console.log(err)
          alert('Something went wrong, please try again!')
      })
  }

//   EDIT CATEGORY
  export function editCategory(id, values) {

    let created
    fetch(`${url}/${id}`, {method: 'GET'})
    // .then(res => res.data)
    .then(response => created = response.json().data.created_at)
    .catch(err => console.log(err))

    let date = new Date().toISOString()

    const newCategory = {
        "id": id,
        "name": values.name,
        "description": values.description,
        "image": values.image,
        "parent_category_id": 0,
        "created_at": created,
        "updated_at": date,
        "deleted_at": null
      }
  
      return fetch(`${url}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(newCategory),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      .then((response) => response.json())
      .then((json) => {
          console.log(json)
          return 'Posted! Great job!'
      })
      .catch(err => {
          console.log(err)
          alert('Something went wrong, please try again!')
      })
  }

//   DELETE CATEGORY
export const deleteCategory = (id) => {
    return fetch(`${url}/${id}`, {method: 'DELETE'})
    // .then(res => res.data)
    .then(() => 'Category deleted')
    .catch(err => console.log(err))
}