export const EmployeeSaveMapper = (requestData) => {
    return {
        firstName: requestData.firstName.value, 
        lastName: requestData.lastName.value, 
        username: requestData.username.value, 
        password: requestData.password.value, 
        emailId: requestData.emailId.value, 
        role: requestData.role.value, 
        location: requestData.location.value, 
        isActive: requestData.isActive.value
    }
}

export const EmployeeUpdateMapper = (destEmployeeData, sourceEmployeeData) => {
    destEmployeeData.firstName.value = sourceEmployeeData.firstName;
    destEmployeeData.lastName.value = sourceEmployeeData.lastName;
    destEmployeeData.username.value = sourceEmployeeData.username;
    destEmployeeData.password.value = sourceEmployeeData.password;
    destEmployeeData.confirmPassword.value = sourceEmployeeData.password;
    destEmployeeData.emailId.value = sourceEmployeeData.emailId;
    destEmployeeData.role.value = sourceEmployeeData.role;
    destEmployeeData.location.value = sourceEmployeeData.location;
    destEmployeeData.isActive.value = sourceEmployeeData.isActive;
    return destEmployeeData;
}

