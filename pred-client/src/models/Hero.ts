import { IAbility, IBaseStat } from ".";
import { HeroClass, HeroRole } from "@/enums";


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

export interface IHeroStats {
    assists?: number;
    avg_cs?: number;
    avg_damage_dealt_to_heroes?: number;
    avg_damage_taken_from_heroes?: number;
    avg_game_duration?: number;
    avg_gold?: number;
    avg_kdar?: number;
    avg_performance_score?: number;
    deaths?: number;
    display_name?: string;
    hero_id?: number;
    kills?: number;
    match_count?: number;
    pickrate?: number;
    winrate?: number;
    winrate_mirrorless?: number; // I think this is winrate without mirror matches
}