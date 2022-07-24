// eslint-disable-next-line import/no-unresolved
import GlobalContext from './GlobalContext';
import { useState } from 'react';

export default function Provider({ children }) {
  const [input, setInput] = useState('');
  const [accessButton, setAccessButton] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState(null);

  const values = {
    input,
    setInput,
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
