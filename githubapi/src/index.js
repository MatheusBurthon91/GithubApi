import ReactDOM from "react-dom/client";
import App from "./App";
// eslint-disable-next-line import/no-unresolved
import Provider from "./helpers/Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
