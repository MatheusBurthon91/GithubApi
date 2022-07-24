export default function SearchBar() {
  return (
    <section>
      <label htmlFor="user">
        Usuário:
        <input type="text" placeholder="Digite o usário" />
      </label>
      <button type="button">Pesquisar Repostorios</button>
    </section>
  );
}