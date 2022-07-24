import { render, screen } from "@testing-library/react";
import App from "../App";

test("teste inicial", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pesquisar Repositorios/i);
  expect(linkElement).toBeInTheDocument();
});
