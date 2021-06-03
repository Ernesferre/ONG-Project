import React from 'react'
import FormMembers from './FormMembers'
import {useLocation} from 'react-router-dom'

const EditMember = () => {

    const location = useLocation()
    const memberToEdit = location.state

    return(
        <FormMembers activityToEdit={memberToEdit}></FormMembers>
    )
}

export default EditMember