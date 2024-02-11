import { styled } from 'styled-components';
import textos from '../Textos/textos.json'

const CardContainer = styled.div`
    position: absolute;
    width: 38%;
    height: auto;
    background: hsl(0, 0%, 100%);
    z-index: 1;
    border-radius: 25px;
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.5);
    margin-top: 10%;
    padding: 2%;

    @media (max-width: 768px) {
        width: 87%;
        border-radius: 10px;
        padding: 3%;

    }
`

const Titulo = styled.div`
    display: flex;
    gap: 20px;

    h1 {
        font-weight: 800;
        font-family: 'Work Sans Variable', sans-serif;
        color: hsl(292, 42%, 14%);
        font-size: 3rem;
    }

`

import star from "../../../public/imagens/icon-star.svg"
import ModeloFaq from '../modeloFaq';

const Card = () => {
    return (
        <CardContainer>
            <Titulo>
                <img src={star} alt="Star" />
                <h1>{textos.titulo}</h1>
            </Titulo>

           {textos.perguntas.map((faq, index) => (
            <ModeloFaq key={index} titulo={faq.pergunta} texto={faq.resposta} />
          ))}

        </CardContainer>
    )
}

export default Card