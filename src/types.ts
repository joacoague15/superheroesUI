export interface IteamMemberObject {
    name: string;
}

export interface IteamMember {
    name: string;
    indexOfCurrentMember?: number;
    teamMembers?: { name: string }[];
    setTeamMembers?: Function;
}

export interface IallTeamMembers {
    teamMembers: { name: string }[];
    setTeamMembers: Function;
}

export interface IheroAvailable {
    heroName: string;
    teamMembers: { name: string }[];
    setTeamMembers: Function;
}