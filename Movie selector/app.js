function isValidPassword(password, userName){
if(password.length < 8 ){
    return false;
}
if(password.indexOf(' ') !== -1){
    return false;
}
if(password.indexOf(userName) !== -1){
    return false;
}
return true;
}