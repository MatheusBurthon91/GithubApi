export default function ListBranches({match: { params: { name } }}) {
  return (
    <section>
      <p>Aqui vão ficar listadas as branches pesquisadas.</p>
      <p>Aqui vão ser listadas a branch do repositorio: {name}</p>
    </section>
  )
}