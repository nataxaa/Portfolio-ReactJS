import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`


:root{
    --background: #0B0B09 ;
    --base-subtitle: #5CD6FF ;
    --base-text: #FBFEFB ;
    --button-base: #003566
}

*{
    margin: 0 ;
    padding: 0 ;
}


body{
    font-family: 'Roboto Condensed', sans-serif;
    background-color:var(--background) ;
    color: var(--base-text) ;
    h1{
        font-family: 'Bebas Neue', cursive;
    }
}

`