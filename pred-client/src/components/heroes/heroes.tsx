import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IHero } from "../../models";
import Hero from "../hero/hero";

const {VITE_OMEDA_URL} = import.meta.env;
const HEROES_URL = `${VITE_OMEDA_URL}/heroes.json`;

const Heroes = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  
  useEffect(() => {
    const retrieveHeroes = async () => {
      const results: AxiosResponse<IHero[]> = await axios.get(HEROES_URL);
      console.log('results', results.data);
      setHeroes(results.data as IHero[]);
    }
    retrieveHeroes();
  }, []);

  return (
    <div className='grid grid-cols-5 gap-2'>
      {heroes.length > 0 && heroes.map((h: IHero) => (
        <Hero
          key={h.id} 
          hero={h}
        />
      ))}
    </div>
  )
}

export default Heroes;