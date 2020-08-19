import styled from 'styled-components'

export const Hero = styled.section`
  &::before {
    background-color: ${props => props.background || '#cb6ce6'};
  }
`

export const UserImage = styled.section`
  img {
    border-color: ${props => props.borderColor || '#cb6ce6'};
  }
`

export const SocialNetwork = styled.div`
  color: ${props => props.color || '#cb6ce6'};
`
