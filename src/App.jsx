import {styled} from  'styled-components';
import EstilosGlobais from "./componentes/estilosGlobais"

import backgrond from "../public/imagens/background-pattern-desktop.svg"
import Card from './componentes/Card';


const Conteiner = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  display: flex;

`

const Caixote  = styled.div`
   display: flex;
   justify-content: center;
  
    
`

function App() {

  return (
    <Caixote>
    <EstilosGlobais/>

    <Conteiner>
    <img src={backgrond} alt="Background" style={{ width: '215%' }}/>
    </Conteiner>
    <Card/>

    </Caixote>
  )
}

export default App
