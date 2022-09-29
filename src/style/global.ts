import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`


:root{
    --background: #0B0B09 ;
    --base-subtitle: #5CD6FF ;
    --base-text: #FBFEFB ;
    --button-base: #d90429;
}

*{
    margin: 0 ;
    padding: 0 ;
}

html{
        scroll-behavior:smooth;
        max-width:1366px ;
    }

body{
    font-family: 'Roboto Condensed', sans-serif;
    background-color:var(--background) ;
    color: #caf0f8 ;
    height:100vh ;
    h1{
        font-family: 'Bebas Neue', cursive;
        color: #023e8a ;
        font-size:40px ;
    }
}

`