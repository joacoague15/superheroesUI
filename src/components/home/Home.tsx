import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";
import '../../styles/myTeamStyle.css';
import DescriptionBox from "../DescriptionBox";
import {useEffect, useState} from "react";

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;
    const [statsOfAllTheTeam, setStatsOfAllTheTeam] = useState({ power: 0, durability: 0, intelligence: 0 });

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
            <div className='team-container'>
                    {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                        member.name && <TeamMember key={i} name={member.name} img={member.img} power={member.power} durability={member.durability} intelligence={member.intelligence} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                    )}
            </div>
            <DescriptionBox>
                <div className="single-stat-container">
                    <h2>Power</h2>
                    <h2>{ statsOfAllTheTeam.power }</h2>
                </div>
                <div className="single-stat-container">
                    <h2>Durability</h2>
                    <h2>{ statsOfAllTheTeam.durability }</h2>
                </div>
                <div className="single-stat-container">
                    <h2>Intelligence</h2>
                    <h2>{ statsOfAllTheTeam.intelligence }</h2>
                </div>
            </DescriptionBox>
        </div>
    )
}

export default Home;