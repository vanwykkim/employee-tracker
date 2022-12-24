//may need to make an object that contains functions.
function accessDatabase(last){
    this.lastName = last;
    this.name = function() {
        return "john" + " " + this.lastName;
      };
};




 module.exports = accessDatabase;