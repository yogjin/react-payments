import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  backgroundColor?: string;
  align?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Styled.Input ref={ref} {...props} />;
});

const Styled = {
  Input: styled.input<InputProps>`
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
    text-align: ${({ align }) => align ?? 'left'};
  `,
};
