// import { useEffect } from "react";

import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    // useEffect(() => {
    //         localStorage.setItem('teamMembers', JSON.stringify(teamMembers))
    // }, [teamMembers])

    // useEffect(() => {
    //     const myTeamStored:any = localStorage.getItem('teamMembers')
    //     const parsedStoredTeam = JSON.parse(myTeamStored);
    //     setTeamMembers(parsedStoredTeam)
    //     // eslint-disable-next-line
    // }, [])

    return (
        <div>
            {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                member.name && <TeamMember key={i} name={member.name} indexOfCurrentMember={i} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            )}
        </div>
    )
}

export default Home;