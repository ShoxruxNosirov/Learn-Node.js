const os = require('os');
const { pid } = require('process');

//console.log(os.EOL)         //  \r\n (posix: \n)

//console.log(os.availableParallelism());               // computer protsessor yadrolar soni

//console.log(os.arch());   console.log(process.arch);  // nodejs falini qayta ishlashdagi ishlash razriyadi

//console.log(os.constants)

//console.log(os.cpus())                                // protsesor yadrolari va ularni komputer yongandan keyingi ishlagan holati

//console.log(os.devNull);

//console.log(os.endianness());

//console.log(os.freemem() / (2 ** 20));                  // komputer bo'sh RAM miqdori baytda 
//console.log(os.freemem() /  2 ** 20 );

//console.log(os.getPriority(pid));

//console.log(os.homedir());                          // foydalanuvchi fayl yo'li  // "C:\Users\user"

//console.log(os.hostname())                            // operatsin tizim host nomi  // "WIN-EODKV2GRQU2"

//console.log(os.loadavg());

//console.log(os.machine());                              // mashina turini qaytaradi    // "x86_64"

//console.log(os.networkInterfaces());                    // tarmoqqa ulanishdagi parametrlar

// console.log(os.platform());                            // node.js binar fayl komplatsiya qilingan platfoma  
// console.log(process.platform);                         // win32  bizni holatda 

//console.log(os.release());                                // operatsion tizim  // didiag dan ko'rsa  OS da turibdi shu 

// console.log(os.constants.priority)                    
// console.log(os.setPriority(pid , 10))

//console.log(os.tmpdir())                                // vaqtinchalik fayllar uchun papkani qaytaradi yani temp faylni

//console.log(os.totalmem()/1_000_000_000);                   // umumiy operativ hotira

//console.log(os.type())                                        // operatsion tizim turi

//console.log(os.uptime()/3600)                                    // komputerni qancha vaqtdan beri yoqiqligi secundda

//console.log(os.userInfo())                    // userInfo ga 'utf8' ga kabi encoding beriladi
//                                              // userInfo user haqida ma'lumot beradi. misol: username property si bor
//console.log(os.homedir())                       // os.homedir() and os.userInfo().homedir farqli ekan  keyinroq yana tushunishga harakat qilaman

//console.log(os.version())                       // operatsion system yadro veriyasi // windows 10 pro

//console.log(os.constants)

// let consttantss = JSON.parse(JSON.stringify(os.constants));

// let arrr = Object.entries(consttantss)
//         .map(itm => typeof itm[1] == "object" ? Object.entries(itm[1]) : [itm])
//         .reduce((acm, item) => (acm.push(...item), acm),[]);

// let arr = [], count = 0;
// function func(consttantss) {
//     for (let key in consttantss) {
       
//         if (typeof consttantss[key] == "object") {
//             func(consttantss[key]);
//         } else {
//             count++;
//             arr.push([key, consttantss[key]]);
//         }
//     }
// }
// func(consttantss)
// console.log(arrr.sort((a, b) => a[1] - b[1]));
// console.log(arr.sort((a, b) => a[1] - b[1]));
