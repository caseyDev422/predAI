import { IAbility, IBaseStat } from ".";
import { HeroClass, HeroRole } from "../enums";


export interface IHero {
    id: number;
    game_id?: number;
    name: string;
    display_name: string;
    image: string; // picture of hero
    abilities: IAbility[];
    base_stats: IBaseStat;
    classes: HeroClass[];
    roles: HeroRole[];
    stats: number[];
}