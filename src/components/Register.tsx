import {useEffect, useState} from "react";
import {Button} from "antd";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [_, setRepeatedPassword] = useState('')

    let navigate = useNavigate()

    const register = (e :any) => {
        e.preventDefault()

            axios.post('http://localhost:4000/register', {
                name: name,
                email: email,
                password: password,
            })
                .then(() => {
                    toast.success("Account created", { position: toast.POSITION.BOTTOM_RIGHT })
                    navigate('/recruitment');
                })
                .catch(err => {
                    console.log(err)
                    toast.error("Error creating account", { position: toast.POSITION.BOTTOM_RIGHT })
                })
    }


    return (
        <form onSubmit={register} className='creation-form-wrapper'>
            <label htmlFor='name'>
                <span className='creation-span'>Name</span>
                <input type='text' onChange={(e: any) => setName(e.target.value)} className='creation-text-input' name='name' />
            </label>
            <label htmlFor='email'>
                <span className='creation-span'>Email</span>
                <input type='email' onChange={(e: any) => setEmail(e.target.value)} className='creation-text-input' name='email' />
            </label >
            <label htmlFor='hero-durability'>
                <span className='creation-span'>Password</span>
                <input type='password' onChange={(e: any) => setPassword(e.target.value)} className='creation-text-input' name='hero-durability' />
            </label>
            <label htmlFor='hero-intelligence'>
                <span className='creation-span'>Repeat password</span>
                <input type='password' onChange={(e: any) => setRepeatedPassword(e.target.value)} className='creation-text-input' name='hero-intelligence' />
            </label>
            <Button htmlType="submit" type='primary'>Register</Button>
        </form>
    )
}

export default Register;