export type LogInBody = {
  email: string;
  password: string;
};
export type LogInResponse = {
  id: number;
  email: string;
  // password:string,
  name: string;
  // phone:string,
  nickName: string;
  location1: string;
  latitude1: number;
  longitude1: number;
  location2: string;
  latitude2: number;
  longitude2: number;
  selectLocation: number;
  role: string;
  status: number;
  profileImgpath: string;
};
