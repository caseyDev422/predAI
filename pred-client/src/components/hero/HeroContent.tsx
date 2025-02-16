import { IHero } from "@/models";
import { FC } from "react";

interface HeroContentProps {
  onHeroClick?: (hero: IHero) => void;
  imageUrl: string;
  hero: IHero;
  useBackground: boolean;
}

const HeroContent: FC<HeroContentProps> = ({ onHeroClick, imageUrl, hero, useBackground }) => (
  <div
    className={useBackground ? 'bg-[#00000085] rounded-[5px] !pl-[10px] !pr-[10px] !pb-[16px] hover:bg-[#060014f2] hover:cursor-pointer transition-all duration-300' : ''}
    onClick={() => onHeroClick && onHeroClick(hero)}
  >
    <h3 className='text-white'>{hero.display_name}</h3>
    <img
      className='w-32 h-32 object-cover mx-auto rounded'
      src={imageUrl}
    />
  </div>
)

export default HeroContent;