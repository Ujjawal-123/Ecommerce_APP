  import bcrypt from "bcrypt";
// creating hashed password using bcrypt
  export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
       /* console.error(error);*/
    }
  };
// compare password against hashedpassword from database
  export const comparePassword = async (password,hashedPassword) => {
     return bcrypt.compare(password,hashedPassword);
  };