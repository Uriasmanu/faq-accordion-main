import { styled } from 'styled-components';


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
import { useEffect, useState } from 'react';

const Card = () => {
    const [textos, setTextos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Uriasmanu/faq-API/faq')
            .then(resposta => resposta.json())
            .then(dados => {
                setTextos(dados[0]); // Ajuste aqui para acessar o primeiro item do array retornado pela API
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }, []); // Coloque [] como segundo argumento para useEffect para garantir que ele só seja executado uma vez durante a montagem

    return (
        <CardContainer>
            <Titulo>
                <img src={star} alt="Star" />
                <h1>{textos.titulo}</h1>
            </Titulo>

            {textos.perguntas && textos.perguntas.map((faq, index) => (
                <ModeloFaq key={index} titulo={faq.pergunta} texto={faq.resposta} />
            ))}

        </CardContainer>
    )
}

export default Card