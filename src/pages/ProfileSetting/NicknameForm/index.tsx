import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput, Typography } from '@/@components';

import { schema } from '@/constants/validationSchema';
import { color, font } from '@/styles/theme';

type NicknameFormData = {
  nickname: string;
};

const NicknameForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { isDirty, errors },
  } = useForm<NicknameFormData>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
  });

  // const RightItem = (
  //   <Button
  //     style={{ marginLeft: '5px' }}
  //     shape="purple"
  //     height="m"
  //     width={94}
  //     /* eslint-disable */
  //     onClick={handleSubmit(data => console.log(data))}
  //   >
  //     <Typography color={color.white} fontSize={font.size.m}>
  //       중복확인
  //     </Typography>
  //   </Button>
  // );

  return (
    <>
      <FormInput
        lable="닉네임"
        placeholder="닉네임 입력"
        isValid={!errors.nickname?.message}
        type="text"
        register={register('nickname')}
        errorMessage={errors.nickname && String(errors.nickname.message)}
        confirmMessage="사용 가능한 닉네임입니다."
        isTouched={isDirty}
      />
      <Typography fontSize={font.size.s} color={color.gray}>
        ㆍ한글, 영문, 숫자만 2~10자 이내로 입력해주세요.
      </Typography>
      <Typography fontSize={font.size.s} color={color.gray}>
        ㆍ숫자로 시작하는 닉네임은 사용하실 수 없습니다.
      </Typography>
    </>
  );
};

export default NicknameForm;
