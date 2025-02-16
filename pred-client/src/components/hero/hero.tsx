import { FC, useState } from 'react';
import { IHero, IHeroStats } from '@/models';
import { getHeroStats } from '@/api';
import { Spinner , useTooltip, Tooltip } from '@chakra-ui/react';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';

interface HeroProps {
  hero: IHero;
  useTooltip?: boolean;
  includeBackground: boolean;
  onHeroClick?: (hero:  IHero) => void;
}

const { VITE_OMEDA_URL } = import.meta.env;

const Hero: FC<HeroProps> = ({ hero, onHeroClick, includeBackground }) => {

  // const onHeroClick = async (heroId: number) => {
  //   tooltip.setOpen(true);
  //   setLoading(true);
  //   console.log('hero selected', hero);
  //   const results = await getHeroStats([heroId]) as IHeroStats;
  //   setHeroStats(results);
  //   setLoading(false);
  //   console.log('RESULTS', results);
  // }

  /**
   * <Tooltip
            interactive
            showArrow
            closeDelay={500}
            content={loading ? 
            <Spinner /> : <HeroStats {...heroStats} />
          }
          >
            <span>
              <HeroContent
                useBackground={includeBackground}
                imageUrl={`${VITE_OMEDA_URL}${hero.image}`}
                hero={hero}
                onHeroClick={onHeroClick}
                // onHeroLeave={() => {
                //   setHeroStats(undefined);
                //   setCurrentHeroId(undefined);
                // }}
                setCurrentHeroId={setCurrentHeroId}
              />
            </span>
          </Tooltip>
   * 
   * 
   */
  
  return (
    <div className='flex justify-center text-center'>
      <HeroContent
        useBackground={includeBackground}
        imageUrl={`${VITE_OMEDA_URL}${hero.image}`}
        hero={hero}
        onHeroClick={onHeroClick && onHeroClick}
      />
    </div>
  )
}

export default Hero;