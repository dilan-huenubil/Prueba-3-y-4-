import { getHerosByTipo } from "../helpers/getHerosByTipo";
import { HeroesCard } from "./HeroesCard";

export const HeroeList = ({ tipo }) => {
  const heroes = getHerosByTipo(tipo);

  
  const title = tipo === 'comics' ? 'DC Comics' : 'Animes';

  return (
    <>
      <h1 className="text-center my-4">{title}</h1>
      <div className="container">
        <div className="row">
          {heroes.map((aux) => (
            <HeroesCard key={aux.id} {...aux} />
          ))}
        </div>
      </div>
    </>
  );
};
