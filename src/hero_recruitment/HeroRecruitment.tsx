import HeroSearcher from "./HeroSearcher";
import HeroAvailable from "./HeroAvailable";

const HeroRecruitment = () => {
    return (
        <div>
            <HeroSearcher />
            <div>
                <HeroAvailable />
                <HeroAvailable />
                <HeroAvailable />
                <HeroAvailable />
            </div>
        </div>
    )
}

export default HeroRecruitment;