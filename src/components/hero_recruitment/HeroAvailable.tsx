import { IheroAvailable } from "../../types";
import '../../styles/recruitmentStyle.css';
import '../../styles/buttonStyle.css';
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {Button, Modal} from "antd";

const HeroAvailable = (props: IheroAvailable) => {
    const { id, heroName, img, teamMembers, setTeamMembers  } = props;

    const [heroStats, setHeroStats] = useState<any>();
    const [modalOpened, setModalOpened] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const MAX_AMOUNT_OF_MEMBERS = 3;

    const isHeroAlreadyOnTeam = (heroName: string): boolean => {
        let isAlreadyOnTeam = false;

        for (const member of teamMembers) {
            if (member.name === heroName)
                isAlreadyOnTeam = true
        }
        return isAlreadyOnTeam;
    }

    const showSnackBar = (text: string) => {
        toast(text, { position: toast.POSITION.BOTTOM_RIGHT })
    }

    const recruitHero = () => {
        const memberCanJoinTeam = !isHeroAlreadyOnTeam(heroName) && teamMembers.length < MAX_AMOUNT_OF_MEMBERS
        const noMoreSpace = teamMembers.length === MAX_AMOUNT_OF_MEMBERS
        const heroAlreadyOnTeam = isHeroAlreadyOnTeam(heroName)

        if (memberCanJoinTeam) {
            showSnackBar(`${heroName} joined the team!`)
            setTeamMembers([...teamMembers, { id, name: heroName, img, power: heroStats.power, durability: heroStats.durability, intelligence: heroStats.intelligence }])
            closeModal()
        }

        if (noMoreSpace)
            showSnackBar(`There is no space for ${heroName}`)

        if (heroAlreadyOnTeam)
            showSnackBar(`${heroName} is already on the team`)
    }

    const openModal = () => {
        axios.get(`http://localhost:4000/${id}`, {
        }).then(response => {
            setHeroStats(response.data)
            setModalOpened(true)
        })
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    const colorHandler = (stat: number) => {
        if (stat < 80)
            return 'black-text'
        if (stat < 90)
            return 'yellow-text'
        return 'green-text'
    }

    const imgLoading = {
        display: !isImageLoaded ? 'none' : 'flex',
    }
    return (
        <>
            <button style={imgLoading} className='hero-button' onClick={openModal}><img onLoad={() => setIsImageLoaded(true)} className='img' src={img} alt={img} /></button>
            <Modal
                title={heroName} open={modalOpened} onCancel={closeModal}
                footer={[
                    <>
                        <Button key="back" onClick={closeModal}>Cancel</Button>
                        <Button type="primary" key="recruit" onClick={recruitHero} style={{ backgroundColor: "green", borderStyle: "none" }}>Recruit</Button>
                    </>
                ]}
                >
                <ul className='member-stats-list'>
                    <li><b>Power: </b><span className={colorHandler(heroStats?.power)}>{heroStats?.power}</span></li>
                    <li><b>Durability: </b><span className={colorHandler(heroStats?.durability)}>{heroStats?.durability}</span></li>
                    <li><b>Intelligence: </b><span className={colorHandler(heroStats?.intelligence)}>{heroStats?.intelligence}</span></li>
                </ul>
            </Modal>
        </>
    )
}

export default HeroAvailable;