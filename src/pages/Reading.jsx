import {useState, useEffect, useContext }from 'react'
import AuthContext from '../store/authContext'
import ResourcesCard from '../elements/ResourcesCard'
import axios from 'axios'

const Reading = () => {

    const [resources, setResources] = useState([])
    const {userId} = useContext(AuthContext)

    const getUserResources = () => {
        axios.get(`/api/resources/${userId}`)
            .then(res => {
                console.log(res.data)
                setResources(res.data)
            })
            .catch(err => console.log('Not accomplishing goals by getting errors are we?'))
    };

    useEffect(() => {
        getUserResources()
    }, [])

  return (
    <div>
        {resources.map(resource => <ResourcesCard resource={resource}/>)}
    </div>
  )
}

export default Reading