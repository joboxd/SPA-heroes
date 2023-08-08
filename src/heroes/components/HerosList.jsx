import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HerosList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher));

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map(hero =>
            (
                <HeroCard
                    key={hero.id}
                    {...hero} />
            )
            )}
        </div>

    )
}
