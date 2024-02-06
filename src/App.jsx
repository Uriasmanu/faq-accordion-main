import {styled} from  'styled-components';
import backgrond from "../public/images/background-pattern-desktop.svg"
import EstilosGlobais from "./componentes/estilosGlobais"

const Conteiner = styled.div`
  max-width: 1440px;
  width: 100%;


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
