import {styled} from  'styled-components';
import EstilosGlobais from "./componentes/estilosGlobais"

import backgrond from "../public/images/background-pattern-desktop.svg"
import Card from './componentes/Card';


const Conteiner = styled.div`
  max-width: 1440px;
  width: 115%;
  position: relative;
  z-index: 0;
  
`

function App() {

  return (
    <Conteiner>
    <EstilosGlobais/>
    <img src={backgrond} alt="Background" style={{ width: '115%' }}/>
    
    <Card/>
    </Conteiner>
  )
}

export default App
