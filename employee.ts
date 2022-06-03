export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export class Employee {
  _fullName: string = "";

  _gender: Gender = Gender.OTHER;
  _birthday?: Date;
  _email: string = "";
  _phoneNumber: string = "";
  constructor(
    fullName: string,
    gender: Gender,
    birthday: Date,
    email: string,
    phoneNumber: string
  ) {
    this._fullName = fullName;
    this._gender = gender;
    this._birthday = birthday;
    this._email = email;
    this._phoneNumber = phoneNumber;
  }
}
