const {readFile}=require('fs')

console.log('Started a first task');
//Check File path!!!!
readFile('./content/first.txt', 'utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log(result);
        console.log('completed first task');
    }
})
console.log('Starting next task');