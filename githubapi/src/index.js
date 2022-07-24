import ReactDOM from "react-dom/client";
import App from "./App";
// eslint-disable-next-line import/no-unresolved
import AppContext from "./helpers/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext.Provider>
    <App />
  </AppContext.Provider>
);
