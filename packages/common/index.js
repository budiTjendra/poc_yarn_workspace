var moment = require("moment")

module.exports  = {
    getHelloText: (name) => {
        if (name){
            console.log(`hello ${name},from common`)
        }else{
            console.log('hello from common')
        }
    },
    getDate: () => {
        const date = moment().format('MMMM Do YYYY, h:mm:ss a')
        console.log(date)
    },
    getDummy: () => {
        console.log("Dummy here!")
    }
};

