import { Container } from "./style";
import img1 from '../../images/imagem2.png'
import img2 from '../../images/imagem4.png'
import img3 from '../../images/imagem5.png'


import "swiper/css";
import "swiper/css/pagination";
import { arrayProjects } from "../../data/data";
import { useEffect } from "react";

import Aos from 'aos'
import "aos/dist/aos.css"


export function Projetos(){

    useEffect(()=>{
        Aos.init({duration: 1200})
    })

    const user = arrayProjects ;
    console.log(user)

    return(
        <Container id="project">
            <h1 data-aos='fade-right'>Alguns Projetos</h1>
            <div data-aos='fade-up' className="project">
                <img src={img1} alt="" />
                <p>
                Projeto de um chat realizado em ReactJS com JavaScript, foi utilizado o firebase para a troca de mensagens e a autenficação da conta é feito pelo login do email.
                </p>
            </div>
            <div data-aos='fade-up' className="project-2">
                <p>
                Projeto de uma Pokédex utilizando ReactJS com TypeScript. Foi consumida a api PokeAPI utilizando o axios e também foi utilizado react router para criar uma rota que ao clicar o card será mostrado mais informações do seu pokémon.
                </p>
                <img src={img2} alt="" />
            </div>
            <div data-aos='fade-up' className="project">
                <img src={img3} alt="" />
                <p>
                Projeto realizado sobre a interface do twitter responsivo. Excelente para aprender e reforçar várias técnicas de CSS e React.
                </p>
            </div>
        </Container>
    )
}