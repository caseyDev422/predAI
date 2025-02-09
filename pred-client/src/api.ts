import Axios from 'axios';
import { CacheAxiosResponse, setupCache } from 'axios-cache-interceptor';
import { IHero } from '@/models';

const {VITE_OMEDA_URL} = import.meta.env;
const axiosInstance = Axios.create();
const api = setupCache(axiosInstance, {
    ttl: 1000 * 60 * 60 * 24, // 24 hours cache per day
});

export const fetchAllHeroes = async () => {
    const HEROES_URL = `${VITE_OMEDA_URL}/heroes.json`;
    const results = await api.get(HEROES_URL) as CacheAxiosResponse<IHero[]>;
      console.log('results', results.data);
      console.log('results cached', results.cached)
    return results.data;
}

export const getHeroStats = async (heroIds: number[]) => {
    const HERO_STATS_URL = `${VITE_OMEDA_URL}/dashboard/hero_statistics.json?hero_ids=[${heroIds.join(',')}]`;
    const results = await api.get(HERO_STATS_URL);
    console.log('RESULTS', results.data);
}