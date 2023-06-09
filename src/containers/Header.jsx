// import { useParams } from 'react-router-dom'
import {useState, useEffect}from 'react'
import HeroCard from '../elements/HeroCard'
import axios from 'axios'

const Header= () => {

    const [heroes, setHeroes] = useState([])
   

    const getHeroes = () => {
        axios.get(`/api/hero`)
            .then(res => {
                console.log(res.data)
                setHeroes(res.data)
            })
            .catch(err => console.log('Not accomplishing goals by getting errors are we?'))
    }

    useEffect(() => {
        getHeroes()
    }, [])

  return (
    <div>
        {heroes.map(hero => <HeroCard hero={hero}/>)}
    </div>
  )
}

export default Header