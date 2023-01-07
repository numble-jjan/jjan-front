import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  TitleBar,
  Header,
  Divider,
  Content,
  ConfirmModal,
} from '@/@components';
import GridItems from '@/@components/Atoms/GridItems';
import SignUpForm from './SignUpForm';

import { Button } from '@/@components';

import { schema } from '@/constants/validationSchema';
import { SignUpFormData } from './types';
import { useModal } from '@/@hooks/useModal';

import { color } from '@/styles/theme';

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
      <Divider color={color.light_gray2} />
      <Content>
        <TitleBar essential={true}>회원 정보</TitleBar>
        <SignUpForm register={register} errors={errors} />
        <GridItems rows={2} gap={5} style={{ marginTop: 'auto' }}>
          <Button shape="whiteWithPurple" height="l" onClick={toggleModal}>
            취소
          </Button>
          <Button
            shape="purple"
            height="l"
            /* eslint-disable */
            onClick={handleSubmit(formData => {
              try {
                // call login usecase
              } catch {
                // handle error
              }
            })}
          >
            회원가입
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
