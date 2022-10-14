import styled from 'styled-components';

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   nav {
      display: flex;
      gap: 0.5rem;

      a {
         width: 3rem;
         height: 3rem;

         display: flex;
         align-items: center;
         justify-content: center;
         border-top: 2px solid transparent;
         border-bottom: 2px solid transparent;
         color: ${(props) => props.theme['gray-100']};

         &:hover {
            border-bottom: 2px solid ${(props) => props.theme['green-500']};
         }

         &.active {
            color: ${(props) => props.theme['green-500']};
         }
      }
   }
`;
