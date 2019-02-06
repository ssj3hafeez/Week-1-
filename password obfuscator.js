//parse string (expect 1 word) using helper function
   // process.argv will return object ... splice to capture 1 word

   function inComing(aString) {
    let orgPass = process.argv.slice(2);
    return orgPass
}

function changePass(anObject) {
    let newPass = inComing().toString().split("");
    for (let i = 0; i < newPass.length; i++) {
        switch (newPass[i]) {
            case 'a':
                newPass[i] = '4';
                break;
            case 'e':
                newPass[i] = '3';
                break;
            case 'o':
                newPass[i] = '0';
                break;
            case 'o':
                newPass[l] = '1';
                break;
            default:
                newPass[i] = newPass[i];
        }
    }
    console.log(newPass.join("").toString());
}
changePass()

//for (i = 0; i < objPass.length)

// getPass()
   //(two functions can exist within one js file)

   //spilt word into characters
    // if char

//output a string
    // 'a' -> '4'
    // 'e' -> '3'
    // 'o' -> '0'
    // 'l' -> '1'



