import { useEffect, useState } from "react";
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {BsBoxArrowUpRight} from 'react-icons/bs'

import "swiper/css";
import "swiper/css/pagination";
import { arrayProjects } from "../../data/data";

export function Projetos(){

    const user = arrayProjects ;
    

    

    console.log(user)

    return(
        <Container id="project">
            <h1>Alguns Projetos</h1>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                {user.map((props:any)=>(
                <SwiperSlide>
                    <div className="style-swiper">
                        <a href={props.link_repositorio}><BsBoxArrowUpRight className="icon"/>github</a>
                        <img src={props.imagem} alt="" />    
                        <p>{props?.nome}</p>
                    </div>
                </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}