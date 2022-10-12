import { Container } from "./style";
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'

export function Contato(){
    return(
        <Container id="contact">
            <h1>Contato</h1>
            <div className="contact">
                <input type="text" placeholder="Digite seu email"/>
                <input type="text" placeholder="Digite o Assunto"/>
                <input type="text" className="corpo-email"/>
            </div>
            <div className="links">
                <a href=""><AiFillGithub/></a>
                <a href=""><AiFillLinkedin/></a>
                <a href=""><AiOutlineWhatsApp/></a>
            </div>
        </Container>
    )
}