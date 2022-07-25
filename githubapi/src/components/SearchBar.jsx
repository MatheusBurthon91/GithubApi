import { useContext, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";

export default function SearchBar() {
  const {
    searchInput,
    setSearchInput,
    accessButton,
    setAccessButton,
    setRepositories,
    setUser,
  } = useContext(GlobalContext);

  const searchRepositoriesByUser = async () => {
    const url = `https://api.github.com/users/${searchInput}/repos`;
    const request = await fetch(url);
    const response = await request.json();
    setRepositories(response);
    setUser(response[0].owner);
  }

  const validateButton = () => {
    if (searchInput.length === 0) {
      setAccessButton(true);
    } else {
      setAccessButton(false);
    }
  }

  useEffect(() => {
    validateButton();
  }, [searchInput, accessButton]);

  return (
    <section>
      <h1>
      User Finder: seu pesquisador de repositórios publicos de qualquer usuário
      </h1>
      <label htmlFor="user">
        Usuário:
        <input
          type="text"
          onChange={({ target }) => setSearchInput(target.value)}
          placeholder="Digite o usário"
        />
      </label>
      <button
        type="button"
        disabled={ accessButton }
        onClick={() => searchRepositoriesByUser() }
      >
          Pesquisar Repostorios
      </button>
    </section>
  );
}