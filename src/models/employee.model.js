'use strict';
 
const dbconn =  require("../../config/config.js");

var Employee = function (employee){
    this.name           = employee.name;
    this.email          = employee.email;
    this.phone          = employee.phone;
    this.organization   = employee.organization;
    this.designation    = employee.designation;
    this.salary         = employee.salary;
    this.status         = employee.status ? employee.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
  };


Employee.create = (newEmp, result)=>{
    dbconn.query("Insert INTO employee set ?", newEmp, function(err, res){
      if(err) {
        console.log(err);
        result(err, null);
        throw err;
      }
      else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    })
};


module.exports= Employee;