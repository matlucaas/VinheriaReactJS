import styled from "styled-components";

const Footer = styled.footer`
    background-color: #591f2c;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
`

const Div = styled.div`
    color: #ccc2c4;
    width: 400px;
    text-align: center;
`

const Titulo = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`

const Contato = styled.p`
    text-decoration: underline;
    margin: 0px;
`

const OpcoesUl = styled.ul`
    list-style-type: none;
`

const OpcoesLi = styled.li`
    color: #317beb;
    cursor: pointer;
    text-decoration: underline;
    margin: 5px 5px;
`

function FooterPag(){
    return(
        <Footer>
            <Div>
                <Titulo>Contato</Titulo>
                <Contato>grupo5@gmail.com</Contato>
                <Contato>+55 11 99999-8888</Contato> <br></br><br></br>
                © 2023 Vinheria Agnello
            </Div>
            <Div>
                <Titulo>Sobre Nós:</Titulo>
                Bem-vindo à Vinheria Agnello, onde a paixão pelo vinho encontra a excelência. Nossa vinheria é um destino
                para os amantes da boa vida, oferecendo uma cuidadosa seleção de vinhos finos de todo o mundo. Descubra 
                o prazer de sabores autênticos em cada garrafa que escolhemos especialmente para você. Saúde!
            </Div>
            <Div>
                <OpcoesUl>
                    <OpcoesLi>Home</OpcoesLi>
                    <OpcoesLi>Sobre</OpcoesLi>
                    <OpcoesLi>Contato</OpcoesLi>
                    <OpcoesLi>Blog</OpcoesLi>
                    <OpcoesLi>FAQ</OpcoesLi>
                </OpcoesUl>
            </Div>
        </Footer>
    );
}

export default FooterPag;