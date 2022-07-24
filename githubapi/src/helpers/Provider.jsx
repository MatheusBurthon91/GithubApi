// eslint-disable-next-line import/no-unresolved
import AppContext from './GlobalContext';
import { useState } from 'react';

export default function Provider({ children }) {
  const [input, setInput] = useState('');
  const [accessButton, setAccessButton] = useState(true); 

  const values = {
    input, 
    setInput,
    accessButton,
    setAccessButton,
  }

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}
