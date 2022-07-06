export const EmployeeSaveMapper = (requestData) => {
    return {
        named: requestData.named.value,
        username: requestData.username.value, 
        password: requestData.password.value, 
        email: requestData.email.value,
        isActive: requestData.isActive.value
    }
}

export const EmployeeUpdateMapper = (destEmployeeData, sourceEmployeeData) => {
    destEmployeeData.named.value = sourceEmployeeData.named;
    destEmployeeData.username.value = sourceEmployeeData.username;
    destEmployeeData.password.value = sourceEmployeeData.password;
    destEmployeeData.confirmPassword.value = sourceEmployeeData.password;
    destEmployeeData.email.value = sourceEmployeeData.email;
    return destEmployeeData;
}

