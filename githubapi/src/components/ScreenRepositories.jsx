import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";

export default function ScreenRepositories() {
  const { repositories } = useContext(GlobalContext);

  return (
    <section>
      {!repositories.length ? (
      <h1>
        Sem repositorios nessa seção pesquisa no input acima
      </h1>) : (
        <div>
          {repositories.map((repository) => (
            <div key={repository.id}>
              <h3>{repository.name}</h3>
              <a href={repository.html_url}>Link do repositorio</a>
              <p>{
              !repository.description ? 'Sem descrição nesse repositório': 
                `${repository.description}`
              }</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}