import { FC } from 'react';
import { IHero } from '@/models';

interface HeroProps {
  hero: IHero;
}

const {VITE_OMEDA_URL} = import.meta.env;

const Hero: FC<HeroProps> = ({hero}) => (
  <div className='flex justify-center text-center'>
    <div>
      <h3 className='text-white'>{hero.display_name}</h3>
    <img 
      className='w-32 h-32 object-cover mx-auto rounded'
      src={`${VITE_OMEDA_URL}${hero.image}`}
    />
    </div>
  </div>
)

export default Hero;