import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {IteamMemberObject} from "../types";
import {toast} from "react-toastify";
import {Progress} from "antd";

const Hero = () => {
    const { id, userId } = useParams()
    const navigate = useNavigate()

    const [heroInfo, setHeroInfo] = useState<IteamMemberObject>({
        durability: 0,
        id: 0,
        img: "",
        intelligence: 0,
        name: "",
        power: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/hero/${id}`)
            .then((res) => setHeroInfo(res.data))
            .catch(err => console.log(err))
    //eslint-disable-next-line
    }, [])

    const addToTeam = () => {
        axios.post(`http://localhost:4000/hero/${id}/add/${userId}`, {
            userId: userId
        })
            .then(res => {
                toast.success(res.data, { position: toast.POSITION.BOTTOM_RIGHT })
                navigate(-1)
            })
            .catch(err => toast.error(err, { position: toast.POSITION.BOTTOM_RIGHT }))
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", width: '25%', height: '20vh', justifyContent: 'flex-start', alignItems: 'center', fontFamily: 'Comic Sans MS', margin: 'auto' }}>
            <div style={{ width: '100%' }}>
                <h2 style={{ marginTop: 5, textAlign: 'center' }}>{heroInfo.name}</h2>
                <img width='600px' src={heroInfo.img} alt='hero-img' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '100%' }}>
                Power <Progress status='normal' percent={heroInfo.power} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
                Durability <Progress status='normal' percent={heroInfo.durability} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
                Intelligence <Progress status='normal' percent={heroInfo.intelligence} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <button style={{ fontSize: 24 }} className='button' onClick={() => navigate(-1)}>Back</button>
                <button style={{ fontSize: 24 }} className='button' onClick={() => addToTeam()}>Recruit</button>
            </div>
        </div>
    )
}

export default Hero;