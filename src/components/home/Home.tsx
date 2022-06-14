import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";
import '../../styles/myTeamStyle.css';

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    return (
        <div className='team-container'>
            {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                member.name && <TeamMember key={i} name={member.name} img={member.img} power={member.power} durability={member.durability} intelligence={member.intelligence} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            )}
        </div>
    )
}

export default Home;