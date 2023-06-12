import { useState, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import { useNavigate } from "react-router-dom"


const AddGoal = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState(null)
    const [unit , setUnit] = useState("")
    const [album, setAlbum] = useState("")
    const [current, setCurrent] = useState(null)
    const [perfect, setPerfect] = useState("")
    const { userId } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(userId)
    const handleSubmitForm = e => {
        e.preventDefault()
        const body = {
            title,
            category,
            description:desc,
            unit_of_measure:unit,
            photo_album_link:album,
            current_score:current,
            perfect_score:perfect,
            userId
        }


        axios
            .post("/api/goal", body)
            .then(res => navigate(`/dashboard`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    placeholder="What is the name of your goal?"
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    placeholder="how would you categorize it?"
    
                    onChange={e => setCategory(e.target.value)}
                />
                <input
                    placeholder="tell us a little bit about it"
                    onChange={e => setDesc(e.target.value)}
                />
                <input
                    placeholder="what unit of measurement will you be using?"
                    onChange={e => setUnit(e.target.value)}
                />
                <input
                    placeholder="Google Photos Album Link"

                    onChange={e => setAlbum(e.target.value)}
                />
                <input
                    placeholder="Have you started yet? If so, how far have your gotten?"
                    type="number"
                    onChange={e => setCurrent(e.target.value)}
                />
                <input
                    placeholder="To complete your goal how many units are required?"
                    type="number"
                    onChange={e => setPerfect(e.target.value)}
                />
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddGoal