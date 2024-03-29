export interface IteamMemberObject {
    id?: number;
    name: string;
    img: string;
    power: number;
    durability: number;
    intelligence: number;
}

export interface IallTeamMembers {
    teamMembers: { name: string, img: string, power: number, durability: number, intelligence: number }[];
    setTeamMembers: Function;
}

export interface IheroAvailable {
    id: number;
    heroName: string;
    img: string;
    teamMembers: { name: string, power: number }[];
    setTeamMembers: Function;
}