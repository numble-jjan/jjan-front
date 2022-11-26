import { atom } from 'recoil';
import { User } from '@/domain/user';

export const userAtom = atom<User>({ key: 'user' });
