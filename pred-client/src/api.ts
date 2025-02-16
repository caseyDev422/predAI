import Axios from 'axios';
import { CacheAxiosResponse, setupCache } from 'axios-cache-interceptor';
import { IHero, IHeroStats } from '@/models';
import { AppErrors } from './enums';

const { VITE_OMEDA_URL } = import.meta.env;
const axiosInstance = Axios.create();
const api = setupCache(axiosInstance, {
  ttl: 1000 * 60 * 60 * 24, // 24 hours cache per day
});

interface IHeroStatsResponse {
  hero_statistics: IHeroStats[];
}

class AppError {
  message: string;
  reason: AppErrors;
  cause: unknown;
  constructor({ message, reason, cause }: { message: string, reason: AppErrors, cause: unknown }) {
    this.message = message;
    this.reason = reason;
    this.cause = cause;
  }
}

export const fetchAllHeroes = async () => {
  try {
    const HEROES_URL = `${VITE_OMEDA_URL}/heroes.json`;
    const results = await api.get(HEROES_URL) as CacheAxiosResponse<IHero[]>;
    return results.data;
  } catch (error) {
    throw new AppError({
      message: `Error occured fetching all heroes ${error}`,
      reason: AppErrors.INTERNAL_SERVER_ERROR,
      cause: error,
    })
  }

}

export const getHeroStats = async (heroIds: number[]) => {
  try {
    const HERO_STATS_URL = `${VITE_OMEDA_URL}/dashboard/hero_statistics.json?hero_ids=[${heroIds.join(',')}]`;
  const results = await api.get(HERO_STATS_URL) as CacheAxiosResponse<IHeroStatsResponse>;
  if (heroIds.length === 1) {
    return results.data.hero_statistics[0];
  }
  return results.data.hero_statistics;
  } catch (error) {
    throw new AppError({
      message: `Error occured fetching hero stats ${error}`,
      reason: AppErrors.INTERNAL_SERVER_ERROR,
      cause: error,
    });
  }
  
}