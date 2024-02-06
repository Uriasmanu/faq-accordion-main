import {styled} from  'styled-components';
import EstilosGlobais from "./componentes/estilosGlobais"

import backgrond from "../public/images/background-pattern-desktop.svg"


const Conteiner = styled.div`
  max-width: 1440px;
  width: 115%;
  
`

function App() {

  return (
    <Conteiner>
    <EstilosGlobais/>
    <img src={backgrond} alt="Background" style={{ width: '115%' }}/>
    

    </Conteiner>
  )
}

export default App
