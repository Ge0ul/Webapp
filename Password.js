const userPass = "RodrigoMiguelBrasilCanto"


function passwordCreator(password) {
        password = password.toLowerCase();
        var passwordArray = Array.from(password);
        var newPassword = []

        for (var i = 0; i < passwordArray.length; i++) {
                switch (passwordArray[i]) {
                        case 'r':
                                newPassword.push("#$%")
                                break;
                        case 'o':
                                newPassword.push("0")
                                break;
                        case 'g':
                                newPassword.push('^&*');
                                break;
                        case 'e':
                                newPassword.push('3');
                                break;
                        case 'i':
                                newPassword.push('1');
                                break;
                        case 'l':
                                newPassword.push('!');
                                break;
                        case 'a':
                                newPassword.push('4');
                                break
                        case 't':
                                newPassword.push('7');
                                break;;

                        default:
                                newPassword.push(passwordArray[i])


                }

        }
        return newPassword.join("");


}

console.log('You asked for this password to be hashed:' + userPass)
console.log('Result: ' + passwordCreator(userPass))


