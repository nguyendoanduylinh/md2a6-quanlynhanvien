"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
class Employee {
    constructor(fullName, gender, birthday, email, phoneNumber) {
        this._fullName = "";
        this._gender = Gender.OTHER;
        this._email = "";
        this._phoneNumber = "";
        this._fullName = fullName;
        this._gender = gender;
        this._birthday = birthday;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
}
exports.Employee = Employee;
