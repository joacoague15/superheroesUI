import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {IteamMemberObject} from "../types";
import {toast} from "react-toastify";

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
            .then(res => toast.success(res.data, { position: toast.POSITION.BOTTOM_RIGHT }))
            .catch(err => toast.error(err, { position: toast.POSITION.BOTTOM_RIGHT }))
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", width: '100%', height: '20vh', justifyContent: 'right', alignItems: 'center', fontFamily: 'Comic Sans MS' }}>
            <div style={{ width: '20%' }}>
                <img width='600px' src={heroInfo.img} alt='hero-img' />
            </div>
            <h2 style={{ marginTop: 5 }}>{heroInfo.name}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <p style={{ margin: 10 }}>Power: <b>{heroInfo.power}</b></p>
                <p style={{ margin: 10 }}>Intelligence: <b>{heroInfo.intelligence}</b></p>
                <p style={{ margin: 10 }}>Durability:  <b>{heroInfo.durability}</b></p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <button className='button' onClick={() => navigate(-1)}>Back</button>
                <button className='button' onClick={() => addToTeam()}>Recruit</button>
            </div>
        </div>
    )
}

export default Hero;