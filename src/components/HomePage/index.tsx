import { Container } from "./style";
import image from '../../images/me.jpg'
import image2 from '../../images/header.png'

import {AiFillHome, AiFillHtml5} from 'react-icons/ai'
import {FaBuilding} from 'react-icons/fa'
import {SiBookstack, SiTypescript, SiJavascript, SiFirebase} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'
import {DiCss3} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'



export function HomePage(){
    return(
            
        <Container id="home">
            <div className="links">
                <a href="#home"><AiFillHome/></a>
                <a href="#about"><FaBuilding/></a>
                <a href="#project"><SiBookstack/></a>
                <a href="#contact"><IoMdContact/></a>
            </div>
            <div>
                <h1>Natan Xavier</h1>
                <p>
                Olá, Bem vindo ao meu portfólio. Sou desenvolvedor front-end especialista em ReactJS,
                utilizo TypeScript nos meus projetos e sempre buscando conhecimento. Tenho buscando agregar 
                mais conhecimento sobre NodeJS.
                </p>
                <p className="principais">Principais Tecnologias</p>
                <div className="tecnologias">
                    <span><GrReactjs/></span>
                    <span><SiTypescript/></span>
                    <span><SiJavascript/></span>
                    <span><AiFillHtml5/></span>
                    <span><DiCss3/></span>
                    <span><SiFirebase/></span>
                    <span><TbBrandNextjs/></span>
                </div>
            </div>
            <img src={image} alt="imagem de perfil" />
        </Container>
            
    )
}