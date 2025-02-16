import { useEffect, useState } from 'react';
import { IHero, IHeroStats } from '@/models';
import { Hero } from '@/components';
import { fetchAllHeroes, getHeroStats } from '@/api';
import { Spinner, Tooltip, useTooltip } from '@chakra-ui/react';
import HeroStats from '../hero/HeroStats';

const Heroes = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [heroStats, setHeroStats] = useState<IHeroStats | undefined>(undefined);
  const [currentHeroId, setCurrentHeroId] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const tooltip = useTooltip();
  
  useEffect(() => {
    const retrieveHeroes = async () => {
      const results = await fetchAllHeroes();
      console.log('results', results);
      setHeroes(results);
    }
    retrieveHeroes();
  }, []);

  const onHeroClick = async (hero: IHero) => {
    if (currentHeroId === hero.id) {
      tooltip.setOpen(false);
      return;
    }
    setCurrentHeroId(hero.id);
    setLoading(true);
    tooltip.setOpen(true);
    console.log('hero selected', hero);
    const results = await getHeroStats([hero.id]) as IHeroStats;
    setHeroStats(results);
    setLoading(false);
    tooltip.reposition({
      placement: 'bottom',
    });
  }

  return (
    <div className='grid grid-cols-5 gap-2' onClick={() => tooltip.open ? tooltip.setOpen(false) : null}>
      {heroes.length > 0 && heroes.map((h: IHero) => (
        <div key={h.id} style={{ position: 'relative' }}>
          { currentHeroId === h.id && <Tooltip.RootProvider value={tooltip}>
            <Tooltip.Positioner style={{transform: 'none', top: '155px', left: loading ? '92px' : '-20px', zIndex: loading ? 2000: 10}}>
              <Tooltip.Content>
                {loading ? <Spinner /> : <HeroStats {...heroStats} />}
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.RootProvider>}
          <Hero
            includeBackground
            useTooltip
            hero={h}
            onHeroClick={onHeroClick}
          />
        </div>
      ))}
    </div>
  )
}

export default Heroes;