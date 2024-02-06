let a=5, b=10;
console.log(`a=${a}\nb=${b}\na+b=${a+b}`);

try{
    console.log(`a+b=${a+c}`);
}
catch(err){
    console.log(err);
    console.log(err.message);
}

console.log(`a=${a}\nb=${b}\na+b=${a + b}`);