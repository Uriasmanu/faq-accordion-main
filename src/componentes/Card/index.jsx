import { styled } from 'styled-components';

const CardContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 30rem;
    background: hsl(0, 0%, 100%);
    z-index: 1;
    left: 45%;
    top: 45%;
    border-radius: 25px;
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.5);
`

const Card = () => {
    return (
        <CardContainer>
            
        </CardContainer>
    )
}

export default Card