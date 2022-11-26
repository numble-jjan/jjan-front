import { Drink } from './drink';

type Mood = string;

type Email = string;
type Password = string;
type Username = string;
export type Nickname = string;
type Url = string;
type Address = {
  addressName: string;
  latitude: number;
  longitude: number;
};
type Tags = {
  drink: Drink[];
  mood: Mood[];
};

export type User = {
  email: Email;
  password: Password;
  nickname: Nickname;
  username: Username;
  address: Address;
  profileUrl: Url;
  keyword: Tags;
};

// Drink => DrinkCategory?

export function setSeletedKeywords(
  keywords: Drink[] | Mood[],
  id: Drink | Mood,
) {
  if (keywords.includes(id)) {
    return keywords.filter(keyword => keyword !== id);
  }

  return [...keywords, id];
}

// export function clear(){}
