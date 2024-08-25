const os=require('os')

//Info about current user
const user=os.userInfo()
console.log(user)

//Method return the system uptime in seconds
console.log(`The system uptime in seconds is ${os.uptime()}`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)