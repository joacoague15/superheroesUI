import { useState } from "react";

import TeamMember from "./TeamMember";

const MyTeam = () => {
    const [firstMember, setFirstMember] = useState({ name: 'Batman' });
    const [secondMember, setSecondMember] = useState({ name: 'Spiderman' });
    const [thirdMember, setThirdMember] = useState({ name: 'Flash' });

    return (
        <div>
                <TeamMember name={firstMember.name} setTeamMembers={setFirstMember} />
                <TeamMember name={secondMember.name} setTeamMembers={setSecondMember} />
                <TeamMember name={thirdMember.name} setTeamMembers={setThirdMember} />
        </div>
    )
}

export default MyTeam;