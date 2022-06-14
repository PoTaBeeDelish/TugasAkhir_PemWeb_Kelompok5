let loggedin = false;

const setStatus = (status) => {
    if(status == true){
        loggedin = true;
    } else {
        loggedin = false;
    }
}