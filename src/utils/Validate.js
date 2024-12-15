export const checkValidData = (email, password, fullName) =>{
    const isEmailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not Valid";
    if(fullName !== undefined){
        if(!isFullNameValid) return "Name is not Valid"
    }



    return null;
}