import { useContext, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";

export default function SearchBar() {
  const {
    input, 
    setInput, 
    accessButton, 
    setAccessButton,
    setRepositories,
  } = useContext(GlobalContext);

  const searchRepositoriesByUser = async () => {
    const url = `https://api.github.com/users/${input}/repos`;
    const request = await fetch(url);
    const response = await request.json();
    setRepositories(response);
  }

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
        disabled={ accessButton }
        onClick={ () => searchRepositoriesByUser() }
      >
          Pesquisar Repostorios
      </button>
    </section>
  );
}