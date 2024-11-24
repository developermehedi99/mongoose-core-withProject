import { Schema, model, connect } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Parents = {
  fatherName: string;
  facontract: string;
  fOccupation: string;
  motherName: string;
  mOccupation: string;
};
export type Student = {
  id: number;
  name: UserName;
  gender: "male" | "female";
  email: string;
  dateOfBirth: string;
  bloodGroup: "A+" | "B+" | "O+" | "D";
  gardian: Parents;
};
