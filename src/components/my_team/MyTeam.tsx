import { IteamMemberObject } from "../../types";
import RecruitedMember from "./RecruitedMember";
import '../../styles/myTeamStyle.css';
import DescriptionBox from "../DescriptionBox";
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const MyTeam = () => {
    const { userId } = useParams()
    const [teamMembers, setTeamMembers] = useState<any>([])
    const [statsOfAllTheTeam, setStatsOfAllTheTeam] = useState({ power: 0, durability: 0, intelligence: 0 });

    const colorHandler = (stat: number) => {
        const lowTeamStats = stat < 200
        const mediumTeamStats = stat < 270

        if (lowTeamStats)
            return 'black-text'
        if (mediumTeamStats)
            return 'yellow-text'
        return 'green-text'
    }
    
    const fetchHeroes = () => {
        axios.get(`http://localhost:4000/${userId}`)
            .then(res => setTeamMembers(res.data))
            .catch(err => console.log(err.data))
    }

    useEffect(() => {
        fetchHeroes()
    //eslint-disable-next-line
    }, [])

    useEffect(() => {
        let powerOfTeam = 0;
        let durabilityOfTeam = 0;
        let intelligenceOfTeam = 0;

        for (const member of teamMembers) {
            powerOfTeam += member.power
            durabilityOfTeam += member.durability
            intelligenceOfTeam += member.intelligence
        }
        setStatsOfAllTheTeam({ ...statsOfAllTheTeam, power: powerOfTeam, durability: durabilityOfTeam, intelligence: intelligenceOfTeam })
        //eslint-disable-next-line
    }, [teamMembers])

    return (
        <div className='home-container' >
            <DescriptionBox>
                <div className="single-stat-container">
                    <h2>Power</h2>
                    <h2 className={colorHandler(statsOfAllTheTeam.power)}>{ statsOfAllTheTeam.power } / 300</h2>
                </div>
                <div className="single-stat-container">
                    <h2>Durability</h2>
                    <h2 className={colorHandler(statsOfAllTheTeam.durability)}>{ statsOfAllTheTeam.durability } / 300</h2>
                </div>
                <div className="single-stat-container">
                    <h2>Intelligence</h2>
                    <h2 className={colorHandler(statsOfAllTheTeam.intelligence)}>{ statsOfAllTheTeam.intelligence } / 300</h2>
                </div>
            </DescriptionBox>
            <div className='team-container'>
                {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                    member.name && <RecruitedMember fetchHeroes={fetchHeroes} key={i} id={member.id} name={member.name} img={member.img} power={member.power} durability={member.durability} intelligence={member.intelligence} />
                )}
            </div>
        </div>
    )
}

export default MyTeam;