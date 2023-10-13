import { ENUM_USER_ROLE } from '../../../enums/user';

export type IUser = {
  name: string;
  age: number;
  contactNo: string;
  email: string;
  password: string;
  address: string;
  role: ENUM_USER_ROLE;
};

export type IUserSearch = { searchTerm?: string };
