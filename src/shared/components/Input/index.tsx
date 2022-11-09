import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  errorMessage?: string | null;
  required: boolean;
}

const Input = ({
  register,
  errorMessage,
  required,
  placeholder,
  type,
}: IProps) => (
  <>
    <InputWrapper isvalid={!!errorMessage}>
      <StyledInput
        placeholder={placeholder}
        type={type}
        required={required}
        {...register}
      />
    </InputWrapper>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </>
);

const StyledInput = styled.input``;

const InputWrapper = styled.div<{ isvalid?: boolean }>``;

const ErrorMessage = styled.span``;

export default Input;
