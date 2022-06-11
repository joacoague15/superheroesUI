import { useEffect, useState } from "react";
import axios from "axios";

import Searcher from "../Searcher";
import HeroAvailable from "./HeroAvailable";
import { IallTeamMembers, IteamMemberObject } from "../../types";

const HeroRecruitment = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    const [fetchedAllHeroes, setFetchedAllHeroes] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState([]);

    const HEROES_AVAILABLE = 'heroesAvailable';

    const fetchHeroes = () => {
        axios.get('http://localhost:4000/heroes')
            .then(response => {
                const responseData = response.data
                setFetchedAllHeroes(responseData)
                setFilteredHeroes(responseData)
                localStorage.setItem(HEROES_AVAILABLE, JSON.stringify(responseData))
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e: any) => {
        const nameSearched = e.target.value;

        if (nameSearched) {
            const filterHeroResult = fetchedAllHeroes.filter((hero: IteamMemberObject) => hero.name.toLowerCase().includes(nameSearched));
            setFilteredHeroes(filterHeroResult);
        }

        if (!nameSearched)
            setFilteredHeroes(fetchedAllHeroes);
    }

    useEffect(() => {
        const availableHeroes:any = localStorage.getItem(HEROES_AVAILABLE)

        if (!availableHeroes)
            fetchHeroes();

        if (availableHeroes) {
            const parsedAvailableHeroes = JSON.parse(availableHeroes);
            setFetchedAllHeroes(parsedAvailableHeroes)
            setFilteredHeroes(parsedAvailableHeroes)
        }
    }, []);

    return (
        <div>
            <Searcher handleChange={handleChange} />
            <div>
                {filteredHeroes && filteredHeroes.map((hero: IteamMemberObject, i: number) =>
                    <HeroAvailable key={i} heroName={hero.name} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                )}
            </div>
        </div>
    )
}

export default HeroRecruitment;