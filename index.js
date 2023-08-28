/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeData){
    const [firstName, familyName, title, payPerHour] = employeeData;
    const employeeObj = {
        "firstName": firstName,
        "familyName": familyName,
        "title": title,
        "payPerHour": payPerHour,
        "timeInEvents": [],
        "timeOutEvents": [],
    }
    return employeeObj;
}

function createEmployeeRecords(employeeData){
    const employeeRecords = employeeData.map((element)=>{
        const employeeRecord = createEmployeeRecord(element);
        return employeeRecord;
    })
    return employeeRecords;
}

function createTimeInEvent(dateStamp){
    const hour = parseInt(dateStamp.split(' ')[1].slice(0,4));
    const date = dateStamp.split(' ')[0];
    const employeeRecord = {
        "type":"TimeIn",
        "hour":hour,
        "date":date
    }
    this.timeInEvents.push(employeeRecord)
    return this;
}

function createTimeOutEvent(dateStamp){
    const hour = parseInt(dateStamp.split(' ')[1].slice(0,4));
    const date = dateStamp.split(' ')[0];
    const employeeRecord = {
        "type":"TimeOut",
        "hour":hour,
        "date":date
    }
    this.timeOutEvents.push(employeeRecord)
    return this;
}

function hoursWorkedOnDate(date){
let findHourIn = 0;
let findHourOut = 0;

this.timeInEvents.forEach((event)=>{
    if(event.date === date){
        findHourIn = event.hour;
    }
});

this.timeOutEvents.forEach((event)=>{
    if(event.date === date){
        findHourOut = event.hour
    }
})

const hoursWorked = (parseInt(findHourOut)-parseInt(findHourIn))/100;
return hoursWorked;
}


function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    // console.log(hoursWorked);
    return hoursWorked*this.payPerHour;
}

function findEmployeeByFirstName(array, name){
    let found = array.find((element) => element.firstName === name);
    return found;
}

// const newArray= [

//     {
//       firstName: 'Natalia',
//       familyName: 'Romanov',
//       title: 'CEO',
//       payPerHour: 150,
//       timeInEvents: [
//         {
//             "type":"TimeIn",
//             "hour":0900,
//             "date":"2023-08-28"
//         }
//       ],
//       timeOutEvents: [
//         {
//             "type":"TimeOut",
//             "hour":1800,
//             "date":"2023-08-28"
//         }
//       ]
//     },
//     {
//       firstName: 'Darcey',
//       familyName: 'Lewis',
//       title: 'Intern',
//       payPerHour: 15,
//       timeInEvents: [
//         {
//             "type":"TimeIn",
//             "hour":0900,
//             "date":"2023-08-28"
//         }
//       ],
//       timeOutEvents: [
//         {
//             "type":"TimeOut",
//             "hour":1800,
//             "date":"2023-08-28"
//         }
//       ]
//     }
//   ];


function calculatePayroll(array){
    // console.log(array);
    let totalPay = 0;
    array.forEach((obj)=>{
            let wages = allWagesFor.call(obj);
            totalPay += wages;
    })
    return totalPay;
}

// console.log(calculatePayroll(newArray));

//allWagesFor - returns sum of pay owed to one employee
//calculatePayroll - return sum of pay owed for all employees for all dates