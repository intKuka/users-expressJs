const ValidationError = class extends Error {
  /**
     @param result validation result from ValidationResult function
 */
 constructor(result) {
  const message = result
    .formatWith(err => err.msg)
    .mapped();
    console.log(message);

   super();  
   this.name = this.constructor.name;
   this.status = 400;
   this.message = message;
  } 
};

export default ValidationError;