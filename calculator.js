/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){
  let memory = 0;
  let total = 0;

  var calculator = {
    
    load: function(x) {
      if (typeof x === "number"){  
        total = x;
        return total;
      }else {
        throw Error("Error");
      }
      },
       getTotal: function(){
      return total;
      },
     add: function(x){
      if (typeof x === 'number'){
        total+=x;
        return total;
      }else{
        throw Error ('Error');
      }
      }, 
     subtract: function(x){
      if(typeof x === 'number'){ 
      total-=x;
       return total;
      }else{
        throw Error('Error');
      }
     },
     multiply: function(x){
      if(typeof x === 'number'){
         total *=x;
         return total;
      }else{
        throw Error('Error');
      }
     },
     divide: function(x){
       if (typeof x === 'number'){
           total/=x;
          return total;
       }else{
         throw Error("Error");
       }
     },
     recallMemory: function(x){
       return memory;
     },
     saveMemory: function(x){
       memory = total;
       return memory;
     },
     clearMemory: function(x){
        memory = 0;
        return memory;
     },
     }
 return calculator;
});

 
 



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

