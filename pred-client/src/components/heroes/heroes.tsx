import { useEffect, useState } from 'react';
import { IHero } from '@/models';
import { Hero } from '@/components';
import { fetchAllHeroes } from '@/api';

const Heroes = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  
  useEffect(() => {
    const retrieveHeroes = async () => {
      const results = await fetchAllHeroes();
      console.log('results', results);
      setHeroes(results);
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