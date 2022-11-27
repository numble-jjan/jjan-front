import { RequestDomain } from '@/@types/request';

import { TokenStorage } from '@/interfaces/adaptor/TokenStorage';

export function defineRequestHeader(domain: RequestDomain) {
  if (domain === 'server') {
    return { Authorization: `Bearer ${TokenStorage().getAccessToken()}` };
  }

  if (domain === 'kakao') {
    return { Authorization: `KakaoAK 05219e41bb62072aca43aa1dac811e8c` };
  }
  return {};
}
