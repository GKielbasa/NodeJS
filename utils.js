const greeting = () => {
    console.log("hello Node!, file is loaded");
}

const add = (a,b) => {
    console.log(a+b)
}


module.exports = {
    greeting,
    add
}