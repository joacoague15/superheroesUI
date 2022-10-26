import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {IteamMemberObject} from "../types";

const Hero = () => {
    const { id } = useParams()

    const [heroInfo, setHeroInfo] = useState<IteamMemberObject>({
        durability: 0,
        id: 0,
        img: "",
        intelligence: 0,
        name: "",
        power: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/${id}`)
            .then((res) => setHeroInfo(res.data))
            .catch(err => console.log(err))
    //eslint-disable-next-line
    }, [])

    return (
        <div style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'flex-start', marginTop: '50px' }}>
            <div style={{ width: '20%' }}>
                <img width='400px' src={heroInfo.img} alt='hero-img' />
            </div>
            <div>
                <h2>{heroInfo.name}</h2>
                <p><b>Power:</b> {heroInfo.power}</p>
                <p><b>Intelligence:</b> {heroInfo.intelligence}</p>
                <p><b>Durability:</b> {heroInfo.durability}</p>
            </div>
        </div>
    )
}

export default Hero;