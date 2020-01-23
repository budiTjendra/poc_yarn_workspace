
module.exports  = {
    getHelloText: (name) => {
        if (name){
            console.log(`hello ${name},from common`)
        }else{
            console.log('hello from common')
        }
    },
}
