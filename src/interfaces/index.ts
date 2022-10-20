import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  children: ReactNode;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserContext {
  onSubmitRegister: (data: IRegisterData) => void;

  onSubmitLogin: (data: ILoginData) => void;

  logout: () => void;
}
export interface ITechData {
  id?: string;
  title?: string;
  status?: string;
}

export interface ITechContext {
  registerModal: boolean;

  setRegisterModal: Dispatch<SetStateAction<boolean>>;

  editModal: boolean | string;

  setEditModal: Dispatch<SetStateAction<boolean | string>>;

  techs: [];

  setTechs: Dispatch<SetStateAction<[]>>;

  values: ITechData;

  setValues: Dispatch<SetStateAction<{}>>;

  createTech: (data: ITechData) => void;

  editTech: (tech_id: string, data: ITechData) => void;

  deleteTech: (tech_id: string) => void;
}
