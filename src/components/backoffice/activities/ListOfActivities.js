import React from 'react'
import {Link} from 'react-router-dom'

const ListOfActivities = () => {
    return(
        <div>
            <Link to='/backoffice/activities/create'>crear actividad</Link>
            <br />
            <Link to='/backoffice/activities/edit'>editar actividad</Link>
        </div>
    )
}

export default ListOfActivities