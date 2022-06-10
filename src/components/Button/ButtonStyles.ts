import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import theme from '../../theme';
import { Variant } from '../../types';

type ButtonStyledProps = Pick<ButtonProps, 'variant'>;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: fit-content;
  cursor: pointer;
  color: ${theme.colors.white};

  ${props => {
    switch (props.variant) {
      case Variant.Primary: {
        return css`
          background-color: ${theme.colors.primary};
        `;
      }
      case Variant.Success: {
        return css`
          background-color: ${theme.colors.success};
        `;
      }
      case 'secondary': {
        return css`
          background-color: ${theme.colors.secondary};
        `;
      }
      case 'danger': {
        return css`
          background-color: ${theme.colors.danger};
        `;
      }
      default:
        return css`
          background-color: ${theme.colors.dark};
        `;
    }
  }}
`;
