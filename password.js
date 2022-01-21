//
// This is a password validator tool
//

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log()
console.log("*** Welcome to the password validator tool ***")
console.log()
console.log(`Your password must:`)
console.log(` - Be at least 10 characters long`)
console.log(` - Contain at least one Capital letter`)
console.log(` - Contain at least one number`)
console.log(` - Contain at least one special character`)
console.log()

reader.question("Enter your password: ", function(password){
    console.log()
    console.log("You entered:",password)
    console.log()
    
    let errors = []  // collect all of the errors

    // check length
    if (password.length < 10) {
        errors.push("Your password must be at least 10 characters long.")
    }
    
    // check capital letter
    if ( !(/[A-Z]+/.test(password)) ) {
        errors.push("Your password must contain at least one Capital letter.")
    }
    
    // check number
    if ( !(/[0-9]+/.test(password)) ) {
        errors.push("Your password must contain at least one number.")
    }
    
    // check special chars
    if ( !(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(password)) ) {
        errors.push("Your password must contain at least one special character.")
    } 
    
    if (errors.length === 0) {
        // the Project Manager wants ugly output, so here goes
        console.log("____   _________  .____    .___________   ")
        console.log("\\   \\ /   /  _  \\ |    |   |   \\______ \\  ")
        console.log(" \\   Y   /  /_\\  \\|    |   |   ||    |  \\ ")
        console.log("  \\     /    |    \\    |___|   ||    `   \\")
        console.log("   \\___/\\____|__  /_______ \\___/_______  /")
        console.log("                \\/        \\/           \\/ ")
        console.log()
        console.log("Your password has a valid format.")
        
    } else {
        // the Project Manager wants ugly output, so here goes
        console.log("_______________________________ ________ __________ ")
        console.log("\\_   _____/\\______   \\______   \\\\_____  \\\\______   \\")
        console.log(" |    __)_  |       _/|       _/ /   |   \|       _/")
        console.log(" |        \\ |    |   \\|    |   \\/    |    \\    |   \\")
        console.log("/_______  / |____|_  /|____|_  /\\_______  /____|_  /")
        console.log("        \\/         \\/        \\/         \\/       \\/ ")
        console.log()

        let errorString
        if (errors.length === 1) {
            errorString = "error"
        } else {
            errorString = "errors"
        }
        console.log(`Your password has the following ${errorString}`)

        for (const error of errors) {
            console.log(" - ", error)
        }

        console.log()
        console.log("Please try again.")
    }
    
    console.log()

    // This line closes the connection to the command line interface.
	reader.close()
});