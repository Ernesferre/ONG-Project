import React from 'react'
import FormActivities from './FormActivities'
import {useLocation} from 'react-router-dom'

const EditActivity = () => {

    const location = useLocation()
    const activityToEdit = location.state

    // const activityToEdit = {
    //     id: 3,
    //     name: 'Taller de lectura',
    //     description: '<h1>Leemos!</h1><br><p>Los días sábados de 10 a 12hs nos encontramos en la librería para aprender a leer.</p>',
    //     image: 'http://4.bp.blogspot.com/-Tb0MggJC09A/Vw2qxKOMGOI/AAAAAAAAAFM/-uVOydM9ZDgfh_x8uPknkKwdqwkfSRKYQCK4B/s1600/libros%255B1%255D.jpg'
    // }

    return(
        <>
            <FormActivities activityToEdit={activityToEdit}></FormActivities>
        </>
        
    )
}

export default EditActivity