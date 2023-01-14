import React from "react";
import { useNavigate } from 'react-router-dom';

function ButtonsNavegation(props){
    const navigate=useNavigate()

    function Proxima(){
        return navigate(`${props.rota2}`)
      }
      
      function Voltar(){
          return navigate(`${props.rota1}`)
      }

    return(
        <div>
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Proxima}>Próxima</button>
        </div>
    )
}
export default ButtonsNavegation