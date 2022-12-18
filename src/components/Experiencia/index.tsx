import { Container } from "./style";
import img from '../../images/me.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

export function Experencia(){

    useEffect(()=>{
        Aos.init({duration: 1200})
    })


    return(
        <Container id="about">
            <h1 data-aos='fade-right'>Minha Historia.</h1>
            <div data-aos='fade-up' className="about-me">
                 <img src={img}/>
                 <p>
                    Cursando Engenharia da Computação na ufc do campus de
                    quixadá, semprei gostei da área de desenvolvimento web e ao
                    longo desse ano intensifiquei meus estudos na área dando uma
                    maior ênfase no front-end, especificamente em reactjs. Possuo
                    um bom poder de comunicação e resoluções de problemas, além
                    de trabalhar muito bem em equipe. 
                 </p>
             </div>
             <div data-aos='fade-up' className="competencias">
                <h3>Compotências (Technical Skills)</h3>
                <p>
                    <span>Forte: </span>ReactJS, NodeJS, Styled Components,CSS, Html, TypeScript, Nextjs,
                    git, context, Consumo de api, JavaScript, chakra ui.
                </p>
                <p>
                    <span>Conhecedor: </span>SQL, C, C++, Java, Firebase, PostegreSQL.
                </p>

                <h3>UFC(Universidade Federal do Ceará) 2018 - ...</h3> 
                <p>
                    Onde aprendi e conheci várias
                    tecnologias que me fizeram se tornar
                    um desenvolvedor, como o javascript e o react. No ano de 2022
                    decidi dar um maior foco no desenvolvimento onde venho fazendo
                    vários projetos que podem ser conferidos no meu github.
                </p>

             </div>
        </Container>
    )
}