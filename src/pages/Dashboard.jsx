import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../store/authContext'
import GoalCard from '../elements/GoalCard'
import axios from 'axios'

const Dashboard = () => {

const [goals, setGoals] = useState([])
const {userId} = useContext(AuthContext)

const getUserGoals = () => {
  axios.get(`/api/goal/${userId}`)
  .then(res => {
    console.log(res.data)
    setGoals(res.data)
  })
  .catch(err => console.log('if you knew how to code you would not get so many errors'))
}

useEffect(() => {
  getUserGoals()
}, [])

  return (
    <div>
      {goals.map(goal => <GoalCard goal={goal}/>)}
    </div>
  )
}

export default Dashboard