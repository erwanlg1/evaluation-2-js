
setTimeout(() => {

    console.log('Hello World')
    
}, 3000);



let i = 0
const stop = setInterval(() => {
    if (i <= 10) {
    
    console.log(i)
    i = ++i;}
    else {
        clearTimeout(stop)

    }
}, 1000);

