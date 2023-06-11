import { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import '../css/Home.css'

const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)
    const authCtx = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post(register ? "/api/register" : "/api/login", {
                email,
                password
            })
            .then(res => {
                authCtx.login(res.data.userId)
            })
            .catch(err => console.log(err))


    }
    return (
        <main id="logon-container">
            {register ? (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>Register</button>
                </form>
            ) : (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>Log in</button>
                </form>
            )}
            <button onClick={() => setRegister(!register)}>
                Need to {register ? "log in?" : "register?"}
            </button>
        </main>
    )
}


export default Home