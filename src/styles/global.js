import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        
    }

    html {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: repeat-y;
        background-image: url('https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png');
    }

    #dialogCard .MuiDialog-container .MuiPaper-root {
        background-color: transparent;
    }

    #dialogColumn .MuiDialog-container .MuiPaper-root {
        background-color: transparent;
    }

    #status > input {
        padding: 0;
    }
`


export const LoadingWrapper = styled.div`
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`