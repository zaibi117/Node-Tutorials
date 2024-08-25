const { readFile, writeFile } = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}
const addText = (path,text) => {
    return new Promise((resolve, reject) => {
        writeFile(path,text,(err,data)=>{
            if(err) {
                reject(err)
            }
        })
    })
}
const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        const third=await addText('./content/result-async.txt',first+second)
        console.log(first,second);
    } catch (error) {
        console.log(error)
    }

}
start();
// readFile('./content/first.txt', 'utf8',
//     (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const first = result;
//         readFile('./content/second.txt', 'utf8',
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 const second = result;
//                 writeFile("./content/result-async.txt",
//                     `Here is the result : ${first} ${second}`,
//                     { flag: 'a' },//Flag is used for appending in a existing file
//                     (err, result) => {
//                         if (err) {
//                             console.log(err)
//                             return
//                         }
//                         console.log(err)
//                     }
//                 )
//             }
//         )
//     }
// )

