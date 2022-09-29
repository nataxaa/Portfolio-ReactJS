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
            
        <Container>
            <div className="links">
                <span><AiFillHome/></span>
                <span><FaBuilding/></span>
                <span><SiBookstack/></span>
                <span><IoMdContact/></span>
            </div>
            <div>
                <h1>Natan Xavier</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio tenetur sunt dolores eveniet optio, labore obcaecati,
                aperiam harum ipsum velit est fugit culpa maxime iusto neque odit iste soluta laudantium!
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