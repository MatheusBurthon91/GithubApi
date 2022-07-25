import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";
import "../style.css";


export default function ScreenUserData() {
  const { user } = useContext(GlobalContext);

  return (
    <section className="center-user-info">
      {
        Object.keys(user).length === 0 ? (<p>Sem usuário, pesquise por um no input acima.</p>) :
        (<div className="controller-user">
            <p className="fontSize-description">{user.login}</p>
            <img src={user.avatar_url} alt={user.login} className="img-user" />
            <p className="fontSize-description">
              <a href={user.html_url} target="_blank" rel="noreferrer" id="profile">
                Link do perfil
              </a>
            </p>
        </div>
        )}
    </section>
  )
}