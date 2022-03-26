import { createContext, useReducer } from 'react';
import axios from 'axios';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const config = {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  };

  const fetchData = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    console.log(params);
    try {
      const {
        data: { items },
      } = await axios({
        method: 'GET',
        url: `https://api.github.com/search/users?${params}`,
        config,
      });
      console.log({ items });
      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const setLoading = () => {
    return dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearData = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchData,
        clearData,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
