import { useRecoilState } from 'recoil';

import LocalStorage from './LocalStorage';
import { accessTokenState as authState } from '@/recoil/atom/token';

// todo 'refresh' => constant로 분리

export const TokenStorage = () => {
  const [accessTokenState, setAccessTokenState] = useRecoilState(authState);

  const getAccessToken = () => accessTokenState;
  const getRefreshToken = () => LocalStorage.get('refresh');

  const setAccessToken = (token: string) => {
    setAccessTokenState(token);
  };
  const setRefreshToken = (token: string) => {
    LocalStorage.set('refresh', token);
  };

  // todo
  // const checkExpiration = () =>

  return { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken };
};
