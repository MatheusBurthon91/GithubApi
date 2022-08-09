import { useContext, useEffect, useState } from "react"
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext"

export default function ListBranches({match: { params: { name } }}) {
  const { user } = useContext(GlobalContext);
  const [branches, setBranches] = useState([]);

  const listAllBranches = async () => {
    const { login } = user;
    const url = `https://api.github.com/repos/${login}/${name}/branches`;
    const request = await fetch(url);
    const response = await request.json();
    console.log(response);
    setBranches(response);
  }

  // se apresentar no readme do projeto
  // falar das tecnologias usadas
  // apresentar o projeto, falar sobre a aplicação
  // fazer testes e melhorar o css
  // pinar o projeto
  // subir no Gh pages

  useEffect(() => {
    listAllBranches();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <p>Aqui vão ser listadas a branch do repositorio: {name}</p>
      <div>
        {branches.map((branch) => (
          <div key={branch.name}>
            <p>{branch.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}