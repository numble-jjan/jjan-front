import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TitleBar, Header, Content, ConfirmModal } from '@/@components';
import GridItems from '@/@components/Atoms/GridItems';
import SignUpForm from './SignUpForm';

import { Button, Typography } from '@/@components';

import { btn1, btn3, color, font } from '@/styles/theme';

import { schema } from '@/constants/validationSchema';
import { SignUpFormData } from './types';
import { useModal } from '@/@hooks/useModal';

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: yupResolver(schema) });

  const [show, toggleModal] = useModal();

  return (
    <>
      <Header title="회원 가입" />
      <Content>
        <TitleBar essential={true}>회원 정보</TitleBar>
        <SignUpForm register={register} errors={errors} />
        <GridItems rows={2} gap={5} style={{ marginTop: 'auto' }}>
          <Button style={btn3} onClick={toggleModal}>
            <Typography
              color={color.purple}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              취소
            </Typography>
          </Button>
          <Button
            style={btn1}
            /* eslint-disable */
            onClick={handleSubmit(formData => {
              try {
                // call login usecase
              } catch {
                // handle error
              }
            })}
          >
            <Typography
              color={color.white}
              fontSize={font.size.content}
              fontWeight={font.weight.bold}
            >
              회원가입
            </Typography>
          </Button>
        </GridItems>
      </Content>
      <ConfirmModal
        isOpen={show}
        message="회원가입을 종료하겠습니까?"
        onConfirm={() => {
          'asd';
        }}
        onCancle={toggleModal}
      />
    </>
  );
};

export default index;
