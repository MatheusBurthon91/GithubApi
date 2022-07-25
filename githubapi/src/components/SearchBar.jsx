import { useContext, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";
import "../style.css";


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
    <section className="search-bar">
      <div>
      <h1>
      User Finder: seu pesquisador de repositórios publicos de qualquer usuário
      </h1>
      <div className="in-search">
      <label htmlFor="user">
        Usuário:
        <input
          type="text"
          onChange={({ target }) => setSearchInput(target.value)}
          placeholder="Digite o usuário"
          className="input-search"
        />
      </label>
      <button
        type="button"
        disabled={ accessButton }
        onClick={() => searchRepositoriesByUser() }
        className="button-search"
      >
          Submeter
      </button>
      </div>
      </div>
    </section>
  );
}