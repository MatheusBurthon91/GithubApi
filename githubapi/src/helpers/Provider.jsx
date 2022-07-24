// eslint-disable-next-line import/no-unresolved
import AppContext from './GlobalContext';

export default function Provider({ children }) {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
}
