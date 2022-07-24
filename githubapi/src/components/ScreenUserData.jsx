import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import GlobalContext from "../helpers/GlobalContext";


export default function ScreenUserData() {
  const { user } = useContext(GlobalContext);

  return (
    <section>
      {console.log(user)}
      {
        user == {} ? 
        (<p>Sem usuário, pesquise por um no input acima.</p>) :
        (<div>
          <h3>{user.login}</h3>
          <div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
            <h3>
              Acesse o perfil da pessoa:
              <a href={user.html_url} target="_blank" rel="noreferrer" id="profile">
              Link do perfil
              </a>  
            </h3>
        </div>
        )}
    </section>
  )
}