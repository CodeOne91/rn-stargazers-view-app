import {ErrorMessage, Repository, Stargazer} from '../models/interface';
import {axiosInstance} from '../services/api';
import {AxiosResponse} from 'axios';
import {useDispatch} from 'react-redux';
import {
  setError,
  setLoading,
  setStargazers,
} from '../store/reducers/stargazersSlice';
import {showErrorSnackbar} from '../store/reducers/SnackbarContextSlice.ts';

interface UseStargazersProps {
  fetchStargazers: (repository: Repository) => Promise<void>;
}

/**
 * Custom Hook used to retrieve stargazers list of a repository.
 *
 * @returns stargazers fetched, loading state and error.
 */
const useStargazers = (): UseStargazersProps => {
  const dispatch = useDispatch();
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
      throw error;
    }
  };

  const fetchStargazers = async (repository: Repository) => {
    try {
      dispatch(setLoading());
      const response = await getStargazers(repository);
      dispatch(setStargazers(response));
    } catch (error: any) {
      dispatch(setError(error));
      dispatch(showErrorSnackbar(error as ErrorMessage));
    } finally {
    }
  };

  return {fetchStargazers};
};

export default useStargazers;
