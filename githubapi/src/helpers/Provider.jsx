// eslint-disable-next-line import/no-unresolved
import GlobalContext from './GlobalContext';
import { useState } from 'react';

export default function Provider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [accessButton, setAccessButton] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({});

  const values = {
    searchInput,
    setSearchInput,
    accessButton,
    setAccessButton,
    repositories,
    setRepositories,
    user,
    setUser,
  }

  return (
    <GlobalContext.Provider value={ values }>
      { children }
    </GlobalContext.Provider>
  );
}
