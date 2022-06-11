import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    return (
        <div>
            {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                member.name && <TeamMember key={i} name={member.name} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            )}
        </div>
    )
}

export default Home;