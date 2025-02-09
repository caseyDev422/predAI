import { FC } from 'react';
import { IHero } from '@/models';
import { getHeroStats } from '@/api';

interface HeroProps {
  hero: IHero;
}

const { VITE_OMEDA_URL } = import.meta.env;

const Hero: FC<HeroProps> = ({ hero }) => {
  const onHeroHover = async (hero: IHero) => {
    console.log('hovering', hero);
    const results = await getHeroStats([hero.id]);
    console.log('RESULTS', results);
  }
  return (
    <div className='flex justify-center text-center'>
      <div
        className='bg-[#00000085] rounded-[5px] !pl-[10px] !pr-[10px] !pb-[16px] hover:bg-[#060014f2] hover:cursor-pointer transition-all duration-300'
        onMouseEnter={() => onHeroHover(hero)}
      >
        <h3 className='text-white'>{hero.display_name}</h3>
        <img
          className='w-32 h-32 object-cover mx-auto rounded'
          src={`${VITE_OMEDA_URL}${hero.image}`}
        />
      </div>
    </div>
  )
}

export default Hero;