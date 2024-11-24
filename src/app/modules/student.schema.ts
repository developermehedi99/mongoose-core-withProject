import { Schema, model, connect } from "mongoose";
import { Parents, Student, UserName } from "./student.interface";

const nameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: String,
});

const gardianSchema = new Schema<Parents>({
  fatherName: { type: String, required: true },
  facontract: String,
  fOccupation: String,
  motherName: String,
  mOccupation: String,
});

const studentSchema = new Schema<Student>({
  id: Number,
  name: nameSchema,
  gender: ["male", "female"],
  email: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  bloodGroup: ["A+", "B+", "D", "O+"],
  gardian: gardianSchema,
});

// model part
const Student = model<Student>("Student", studentSchema);
