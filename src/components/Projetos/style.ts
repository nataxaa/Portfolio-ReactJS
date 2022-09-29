import styled from "styled-components";


export const Container = styled.div`

height:100vh ;
border-top:1px solid #FFF;
margin: 0 12rem ;
.swiper-slide img {
  display: block;
  width: auto ;
  height:4rem ;
  object-fit: cover;
  margin-bottom:1rem ;
  align-items:center ;
  justify-content:center ;
  
}

.swiper {
  margin-top:4rem ;
  
  width: 100%;
  height: 50%;
  z-index:0 ;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #FFF;
  position:initial ;
  border-radius:6px ;
  background-color: #023e8a ;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

div.style-swiper{
    display:flex ;
    flex-direction:column ;
    button{
        padding:8px ;
        border:none ;
        background-color:#FFBF69 ;
        border-radius:10px ;
        margin-top:10px ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
    }
}

h1{
    margin-top:3rem ;
}

`