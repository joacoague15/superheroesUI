import { useEffect } from 'react';

import { IallTeamMembers } from "../../types";
import TeamMember from "./TeamMember";

const Home = (props: IallTeamMembers) => {
    const { firstMember, secondMember, thirdMember, setFirstMember, setSecondMember, setThirdMember } = props;

    // useEffect(() => {
    //     const firstMemberStored:any = (localStorage.getItem('firstMember'))
    //     // const secondMemberStored:any = localStorage.getItem('secondMember')
    //     // const thirdMemberStored:any = localStorage.getItem('thirdMember')
    //
    //     const parsedFirstMemberStored = JSON.parse(firstMemberStored)
    //     // const parsedSecondMemberStored = JSON.parse(secondMemberStored)
    //     // const parsedThirdMemberStored = JSON.parse(thirdMemberStored)
    //
    //     setFirstMember(parsedFirstMemberStored);
    //     // setSecondMember(parsedSecondMemberStored);
    //     // setThirdMember(parsedThirdMemberStored);
    // }, [])

    return (
        <div>
            <TeamMember name={firstMember.name} setTeamMember={setFirstMember} />
            <TeamMember name={secondMember.name} setTeamMember={setSecondMember} />
            <TeamMember name={thirdMember.name} setTeamMember={setThirdMember} />
        </div>
    )
}

export default Home;