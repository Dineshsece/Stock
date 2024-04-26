const userModel = require('../models/userModel');

class userService {
    static async userRegistration(username, email,doubt) {
        try {
            
            if (!username || !email) {
                
               return false;
            }

        
            const emailRegex = /@/;
            if (!emailRegex.test(email)) {
                
                return false;
            }

          

           
          

        
            const createUser = new userModel({ username, email,doubt});

  
            await createUser.save();
            
            return true;
           
        } catch (err) {
            console.error("Error during user registration:", err.message);
           
        }
    }

   
}

module.exports = userService;

