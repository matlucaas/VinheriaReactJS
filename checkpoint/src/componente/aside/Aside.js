import styled from "styled-components";
import Vinheria from "../../imagens/vinheria.jpg";
import Twitter from "../../imagens/XTwitter.png";
import Instagram from "../../imagens/Instagram.png";
import Facebook from "../../imagens/Facebook.png";
import LinkedIn from "../../imagens/LinkedIn.png";

const Aside = styled.aside`
    padding: 1em;
    margin: 0.5em;
    border-radius: 10px;
    border: 3px solid;
    border-color: #661729;
    display: block;
    background-color: #8f223a;
    width: 300px;
    height: 800px;
`

const Imagem = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid;
    display: block; 
    margin: 0 auto; 
    margin-bottom: 10px;
`

const Paragrafo = styled.p`
    text-align: justify;
    color: #deb1bb;
    margin-bottom: 20px;
`

const OpcoesUl = styled.ul`
    list-style-type: none;
    background-color: #ab2744;
    border: 3px solid;
    border-radius: 10px;
    padding: 10px;
`

const OpcoesLi = styled.li`
    background-color: #d43356;
    border: 3px solid;
    border-radius: 10px;
    margin: 5px 5px;
    text-align: center;
`

const RedeSocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 80px;
`

const ImgRedeSocial = styled.img`
    width: 40px;
    height: 40px;
`

function AsidePag(){
    return(
        <Aside>
            <Imagem src={Vinheria}/>
            <Paragrafo>
                A Vinheria Agnello, fundada em 1931, é uma renomada vinheria brasileira localizada no coração da Serra Gaúcha, na cidade de Bento Gonçalves, Rio Grande do Sul. 
                Com quase um século de tradição, a vinheria tornou-se um símbolo da excelência na produção de vinhos e espumantes no Brasil.
                A história da Vinheria Agnello é marcada pelo compromisso com a qualidade e a inovação.
                A Vinheria Agnello é reconhecida por seu compromisso com a sustentabilidade e a responsabilidade social, garantindo que o amor pela vinicultura seja compartilhado com as gerações futuras.
                Atualmente, nossos interesses são:
            </Paragrafo>

            <OpcoesUl>
                <OpcoesLi draggable="true">Expansão internacional</OpcoesLi>
                <OpcoesLi draggable="true">Maior responsabilidade ambiental</OpcoesLi>
                <OpcoesLi draggable="true">Melhor experiência ao cliente</OpcoesLi>
            </OpcoesUl>

            <RedeSocialContainer>
                <a href="https://twitter.com/FIAP" target="_blank" rel="noreferrer"><ImgRedeSocial src={Twitter}/></a>
                <a href="https://www.instagram.com/fiapoficial/" target="_blank" rel="noreferrer"><ImgRedeSocial src={Instagram}/></a>
                <a href="https://www.linkedin.com/school/fiap/" target="_blank" rel="noreferrer"><ImgRedeSocial src={LinkedIn}/></a>
                <a href="https://www.facebook.com/fiap" target="_blank" rel="noreferrer"><ImgRedeSocial src={Facebook}/></a>
            </RedeSocialContainer>
        </Aside>
    );
}

export default AsidePag;