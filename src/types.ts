export interface IteamMemberObject {
    name: string;
}

export interface IteamMember {
    name: string;
    setTeamMember: Function;
}

export interface IallTeamMembers {
    firstMember: IteamMemberObject;
    secondMember: IteamMemberObject;
    thirdMember: IteamMemberObject;
    setFirstMember: Function;
    setSecondMember: Function;
    setThirdMember: Function;
}

export interface IheroAvailable {
    firstMember: IteamMemberObject;
    secondMember: IteamMemberObject;
    thirdMember: IteamMemberObject;
    setFirstMember: Function;
    setSecondMember: Function;
    setThirdMember: Function;
    heroName: string;
}