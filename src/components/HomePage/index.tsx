import { Container } from "./style";
import image from '../../images/me.jpg'
import image2 from '../../images/header.png'

import {AiFillHome} from 'react-icons/ai'
import {FaBuilding} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'

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
            </div>
            <img src={image} alt="imagem de perfil" />
        </Container>
            
    )
}