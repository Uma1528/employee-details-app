export const EmployeeSaveMapper = (requestData) => {
    return {
        name: requestData.name.value,
        username: requestData.username.value, 
        password: requestData.password.value, 
        email: requestData.email.value,
        phone: requestData.phone.value,
        isActive: requestData.isActive.value
    }
}

export const EmployeeUpdateMapper = (destEmployeeData, sourceEmployeeData) => {
    destEmployeeData.name.value = sourceEmployeeData.name;
    destEmployeeData.username.value = sourceEmployeeData.username;
    destEmployeeData.password.value = sourceEmployeeData.password;
    destEmployeeData.confirmPassword.value = sourceEmployeeData.password;
    destEmployeeData.email.value = sourceEmployeeData.email;
    destEmployeeData.phone.value = sourceEmployeeData.phone;
    return destEmployeeData;
}

