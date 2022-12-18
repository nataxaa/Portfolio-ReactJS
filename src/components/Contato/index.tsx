import { Container } from "./style";
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"

export function Contato(){

    
    useEffect(()=>{
        Aos.init({duration: 1200})
    })

    return(
        <Container id="contact">
            <h1 data-aos='fade-left'>Contato</h1>
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