import { useContext } from "react";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";
import "../style.css";

// a pesquisa de branches vai acontecer pela url:
// https://api.github.com/repos/MatheusBurthon91/Exercicio_logica_python/branches
// tirando o nome que fica entre o usuario e branches


export default function ScreenRepositories() {
  const { repositories } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <section className="center-user-info">
      {console.log(repositories)}
      {!repositories.length ? (
      <h1>
        Sem repositorios nessa seção pesquisa no input acima
      </h1>) : (
        <div className="list_repositories">
          {repositories.map((repository) => (
            <div key={repository.id} className="repository">
              <h3>{repository.name}</h3>
              <a href={repository.html_url}>Link do repositorio</a>
              <p>{
              !repository.description ? 'Sem descrição nesse repositório': 
                `${repository.description}`
              }</p>
              <button
                type="button"
                onClick={() => history.push(`branche/${repository.name}`)}
              >
                listar branches
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}