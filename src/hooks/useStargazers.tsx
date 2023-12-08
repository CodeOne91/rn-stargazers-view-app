import {useState} from 'react';
import {Repository, Stargazer} from '../models/interface';
import {axiosInstance} from '../services/api';
import {AxiosResponse} from 'axios';

interface UseStargazersProps {
  stargazers: Stargazer[];
  loading: boolean;
  fetchStargazers: (repository: Repository) => Promise<void>;
}

/**
 * Custom Hook used to retrieve stargazers list of a repository.
 *
 * @returns stargazers fetched, loading state and error.
 */
const useStargazers = (): UseStargazersProps => {
  const [stargazers, setStargazers] = useState<Stargazer[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * get request in order to retrieve list of stargazers.
   *
   * @param {Repository} repository - Object containing info about repo.
   * @returns {Promise<Stargazer[]>} Return the list of stargazers that match param, or an empty array.
   */
  const getStargazers = async (
    repository: Repository,
  ): Promise<Stargazer[]> => {
    try {
      const response: AxiosResponse<Stargazer[]> = await axiosInstance.get(
        `/repos/${repository.owner}/${repository.name}/stargazers`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching stargazers:', error);
      throw error;
    }
  };

  const fetchStargazers = async (repository: Repository) => {
    try {
      setLoading(true);
      const response = await getStargazers(repository);
      setStargazers(response);
    } catch (error) {
      console.log('Fetch Stargazers error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return {stargazers, loading, fetchStargazers};
};

export default useStargazers;
