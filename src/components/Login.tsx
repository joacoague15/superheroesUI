import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {Button} from "antd";

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const login = (e :any) => {
        e.preventDefault()

        axios.post('http://localhost:4000/login', {
            name: name,
            email: email,
            password: password,
        })
            .then(() => {
                toast.success("Login confirmed", { position: toast.POSITION.BOTTOM_RIGHT })
                navigate('/recruitment');
            })
            .catch(err => {
                console.log(err)
                toast.error("Error while trying to login", { position: toast.POSITION.BOTTOM_RIGHT })
            })
    }


    return (
        <form onSubmit={login} className='creation-form-wrapper'>
            <label htmlFor='email'>
                <span className='creation-span'>Email</span>
                <input type='email' onChange={(e: any) => setEmail(e.target.value)} className='creation-text-input' name='email' />
            </label >
            <label htmlFor='hero-durability'>
                <span className='creation-span'>Password</span>
                <input type='password' onChange={(e: any) => setPassword(e.target.value)} className='creation-text-input' name='hero-durability' />
            </label>
            <Button htmlType="submit" type='primary'>Login</Button>
        </form>
    )
}

export default Login;