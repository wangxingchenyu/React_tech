let num = 10;

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (num > 10) {
                resolve("成功");
            } else {
                reject("失败");
            }
        })
    })
}

let p = p();

p.then((val) => {
    console.log(val);
}).catch((val) => {
    console.log(val);
})
let one ="helloworld"
console.log(one)


