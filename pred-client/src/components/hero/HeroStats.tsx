import { IHeroStats } from "@/models";
import { FC } from "react";
import StatRow from "./StatRow";

const HeroStats: FC<IHeroStats | undefined> = (heroStats) => (
  <div>
    <div className="flex flex-col text-center justify-center">
      <h2>Total average stats of hero</h2>
      <h3>{heroStats?.display_name}</h3>
    </div>
    <hr className='!mb-4'/>
    <StatRow label="Damage dealt to heros" value={heroStats?.avg_damage_dealt_to_heroes} />
    <StatRow label="Damage taken from heroes" value={heroStats?.avg_damage_taken_from_heroes} />
    <StatRow label="Game Duration" value={heroStats?.avg_game_duration} />
    <StatRow label="Gold" value={heroStats?.avg_gold} />
    <StatRow label="KDAR (Kills, Deaths, Assists)" value={heroStats?.avg_kdar} />
    <StatRow label="Deaths" value={heroStats?.deaths} />
    <StatRow label="Kills" value={heroStats?.kills} />
    <StatRow label="Pickrate" value={`${heroStats?.pickrate?.toFixed(2)}%`} />
    <StatRow label="Winrate" value={`${heroStats?.winrate?.toFixed(2)}&`} />
    <StatRow label="Winrate no mirror" value={`${heroStats?.winrate_mirrorless?.toFixed(2)}%`} />
  </div>
)

export default HeroStats;