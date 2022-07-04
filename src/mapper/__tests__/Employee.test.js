import { render } from '@testing-library/react';
import { EmployeeSaveMapper, EmployeeUpdateMapper } from '../Employee';

test("render App element", ()=>{
    const requestData = {
        firstName: {value: "firstname", isRequired: true, isError: false, includeForSave: true},
        lastName: {value: "lastname", isRequired: true, isError: false, includeForSave: true},
        username: {value: "username", isRequired: true, isError: false, includeForSave: true},
        password: {value: "password", isRequired: true, isError: false, includeForSave: true},
        emailId: {value: "emailid", isRequired: true, isError: false, includeForSave: true},
        role: {value: "role", isRequired: true, isError: false, includeForSave: true},
        location: {value: "location", isRequired: true, isError: false, includeForSave: true},
        isActive: {value: true, isRequired: false, isError: false, includeForSave: true}
    };
    const expectData = {
        firstName: 'firstname',
        lastName: 'lastname',
        username: 'username',
        password: 'password',
        emailId: 'emailid',
        role: 'role',
        location: 'location',
        isActive: true
      };
    expect(EmployeeSaveMapper(requestData)).toStrictEqual(expectData);
});


test("render App element", ()=>{
    const requestData = {
        firstName: {value: "", isRequired: true, isError: false, includeForSave: true},
        lastName: {value: "", isRequired: true, isError: false, includeForSave: true},
        username: {value: "", isRequired: true, isError: false, includeForSave: true},
        password: {value: "", isRequired: true, isError: false, includeForSave: true},
        confirmPassword: {value: "", isRequired: true, isError: false, includeForSave: true},
        emailId: {value: "", isRequired: true, isError: false, includeForSave: true},
        role: {value: "", isRequired: true, isError: false, includeForSave: true},
        location: {value: "", isRequired: true, isError: false, includeForSave: true},
        isActive: {value: true, isRequired: false, isError: false, includeForSave: true}
    };
    const sourceData = {
        firstName: 'firstname',
        lastName: 'lastname',
        username: 'username',
        password: 'password',
        emailId: 'emailid',
        role: 'role',
        location: 'location',
        isActive: true
      };
    expect(EmployeeUpdateMapper(requestData, sourceData)).not.toBeNull;
});