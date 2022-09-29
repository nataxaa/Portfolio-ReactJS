import { useEffect, useState } from "react";
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { arrayProjects } from "../../data/data";

export function Projetos(){

    const user = arrayProjects ;
    

    

    console.log(user)

    return(
        <Container>
            <h1>Meus Projetos</h1>
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
                        <img src={props.imagem} alt="" />    
                        <p>{props?.nome}</p>
                    </div>
                </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}