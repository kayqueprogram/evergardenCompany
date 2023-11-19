import React from 'react'
import styled from 'styled-components'


function Footer() {

    const FooterContainer = styled.footer`
     color: #fff;
    `
    return (
        <FooterContainer class="py-3 my-4">
            <ul class="nav justify-content-center pb-3 mb-3 ">
                <li class="nav-item"><a href="#" class="nav-link px-2 ">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2">Sobre</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 ">Contato</a></li>
            </ul>
            <p class="text-center ">© 2023 Company, Evergarden</p>
        </FooterContainer>
    )
}

export default Footer