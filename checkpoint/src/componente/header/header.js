import styled from "styled-components";

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:0 auto;
    color: white;
    background-color: #b82142;
    width: 100%;
`

const OpcoesUl = styled.ul`
    font-size: 21px;
    display: flex;
    justify-content: right;
    text-align: center;
    padding: 0 10px;
    font-weight: 400;
    width:100%;
`

const TitleUl = styled.p`
    font-size: 35px;
    display: inline-flex;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
    font-weight: bold;
    width:30%;
    cursor: pointer;
`

const Opcoesli = styled.li`
    padding: 0 3vw;
    list-style: none;
    &:hover{
        cursor: pointer;
        margin:0;
        background-color:#911a34;
        border-radius: 10px;
        color:white;
    }    
    max-width: 200px;
`

function HeaderPag(){
    return(        
        <FlexDiv>
            <TitleUl>
                Vinheria Agnello
            </TitleUl>
            <OpcoesUl className='opcoes' list-style="none">
                <Opcoesli display="inline-block">Home</Opcoesli>
                <Opcoesli display="inline-block">Sobre</Opcoesli>
                <Opcoesli display="inline-block">Contato</Opcoesli>
                <Opcoesli display="inline-block">Blog</Opcoesli>
                <Opcoesli display="inline-block">FAQ</Opcoesli>
            </OpcoesUl>
        </FlexDiv>
    );
}

export default HeaderPag;