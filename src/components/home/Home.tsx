import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";
import '../../styles/myTeamStyle.css';

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    return (
        <div className='team-container'>
            {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                member.name && <TeamMember key={i} name={member.name} img={member.img} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            )}
        </div>
    )
}

export default Home;