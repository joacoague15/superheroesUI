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
        teamMembers.map((member: any) => {
            powerOfTeam += member.power
            durabilityOfTeam += member.durability
            intelligenceOfTeam += member.intelligence
            return null
        })

        setStatsOfAllTheTeam({ ...statsOfAllTheTeam, power: powerOfTeam, durability: durabilityOfTeam, intelligence: intelligenceOfTeam })

    }, [statsOfAllTheTeam, teamMembers])

    return (
        <div className='home-container' >
            <div className='team-container'>
                    {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                        member.name && <TeamMember key={i} name={member.name} img={member.img} power={member.power} durability={member.durability} intelligence={member.intelligence} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                    )}
            </div>
            <DescriptionBox>
                <ul>
                    <li>Power: { statsOfAllTheTeam.power }</li>
                    <li>Durability: { statsOfAllTheTeam.durability }</li>
                    <li>Intelligence: { statsOfAllTheTeam.intelligence }</li>
                </ul>
            </DescriptionBox>
        </div>
    )
}

export default Home;