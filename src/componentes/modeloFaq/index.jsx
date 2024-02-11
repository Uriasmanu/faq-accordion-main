import React, { useState } from 'react';
import { styled } from 'styled-components';

import mais from '../../../public/imagens/icon-plus.svg';
import menos from '../../../public/imagens/icon-minus.svg';

const ContaineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border-bottom: hsl(275, 100%, 97%) solid 1px;

    h2 {
        font-size: 20px;
        color: hsl(292, 42%, 14%);
        font-family: 'Work Sans Variable', sans-serif;
    }
`

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

const ModeloFaq = ({ titulo, texto }) => {
    const [expandido, setExpandido] = useState(false);

    const toggleExpandido = () => {
        setExpandido(!expandido);
    };

    return (
        <>
            <ContaineDiv>
                <h2>{titulo}</h2>
                <Button onClick={toggleExpandido}>
                    <img src={expandido ? menos : mais} alt={expandido ? "Menos" : "Mais"} />
                </Button>
            </ContaineDiv>
            {expandido && <p style={{ color: 'hsl(292, 16%, 49%)' }}>{texto}</p>}
        </>
    );
}

export default ModeloFaq;
