import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";


export default function ScreenUserData() {
  const { user } = useContext(GlobalContext);

  return (
    <section>
      {
        Object.keys(user).length === 0 ? (<p>Sem usuário, pesquise por um no input acima.</p>) :
        (<div>
          <h3>{user.login}</h3>
            <img src={user.avatar_url} alt={user.login} />
            <a href={user.html_url} target="_blank" rel="noreferrer" id="profile">
              Link do perfil
            </a>
        </div>
        )}
    </section>
  )
}