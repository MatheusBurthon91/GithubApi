import { useContext, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";

export default function SearchBar() {
  const {
    input, 
    setInput, 
    accessButton, 
    setAccessButton
  } = useContext(GlobalContext);

  const validateButton = () => {
    if (input.length === 0) {
      setAccessButton(true);
    } else {
      setAccessButton(false);
    }
  }

  useEffect(() => {
    validateButton();
  }, [input, accessButton]);

  return (
    <section>
      <label htmlFor="user">
        Usuário:
        <input
          type="text"
          onChange={({ target }) => setInput(target.value)}
          placeholder="Digite o usário"
        />
      </label>
      <button
        type="button"
        disabled={ accessButton }>
          Pesquisar Repostorios
      </button>
    </section>
  );
}