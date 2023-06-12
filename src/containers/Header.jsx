// import { useParams } from 'react-router-dom'
import {useState, useEffect, useContext}from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/authContext'
// import HeroCard from '../elements/HeroCard'
import axios from 'axios'

const Header= () => {


    const {userId, logout} = useContext(AuthContext)

    // const [heroes, setHeroes] = useState([])
   

    // const getHeroes = () => {
    //     axios.get(`/api/hero`)
    //         .then(res => {
    //             console.log(res.data)
    //             setHeroes(res.data)
    //         })
    //         .catch(err => console.log('Not accomplishing goals by getting errors are we?'))
    // }

    // useEffect(() => {
    //     getHeroes()
    // }, [])

  return (
    userId ? (
    <div>
        <nav className='flex justify-center items-center h-[10vh] bg-secondary'>
        <NavLink to='/dashboard' className='mx-10'>Dashboard</NavLink>
        <NavLink to='/reading' className='mx-10'>Resources</NavLink>
        <button onClick={logout} className='mx-10'>Logout</button>
    </nav>
   
        {/* {heroes.map(hero => <HeroCard hero={hero}/>)} */}
    </div>
  ) : null
  )
}

export default Header