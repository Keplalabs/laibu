import styled from 'styled-components'

export const Header = styled.h1`
    font-weight:bold;
    text-align: center;
    font-family: 'Cagliostro',sans-serif;
    font-size:2.5rem;
    color:${({ theme }) => theme.colors.color}
`
export const LandingHeader = styled.span`
    font-weight:bold;
    text-align: center;
    font-size3rem;
    font-family: 'Cagliostro',sans-serif;
    color:#77059F;
    @media (max-width: 600px) {
        font-size: 2.5rem;
        width:100%;
}
@media (min-width: 1366px) {
        font-size: 3rem;
        width:100%;
}                                   
`
