import { useEffect } from "react";

import { IallTeamMembers, IteamMemberObject } from "../../types";
import TeamMember from "./TeamMember";

const Home = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    const TEAM_MEMBERS_VALUE = 'teamMembers';

    useEffect(() => {
        const atLeastOneTeamMember = teamMembers[0].name !== '';
        if (atLeastOneTeamMember)
            localStorage.setItem(TEAM_MEMBERS_VALUE, JSON.stringify(teamMembers))
    }, [teamMembers])

    useEffect(() => {
        const myTeamStored:any = localStorage.getItem(TEAM_MEMBERS_VALUE)
        const parsedStoredTeam = JSON.parse(myTeamStored);
        console.log(parsedStoredTeam)
        // setTeamMembers(parsedStoredTeam)
        // eslint-disable-next-line
    }, [setTeamMembers])

    return (
        <div>
            {teamMembers && teamMembers.map((member: IteamMemberObject, i: number) =>
                member.name && <TeamMember key={i} name={member.name} />
            )}
        </div>
    )
}

export default Home;