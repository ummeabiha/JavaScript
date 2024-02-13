let a=5, b=10;
console.log(`a=${a}\nb=${b}\na+b=${a+b}`);

try{
    console.log(`a+b=${a+c}`);
}
catch(err){
    console.log(err);
    console.log(err.message);
}
finally{
    console.log("I will run in any condition (even when try and catch both contains the error or not)");
    // Close the file/ connection
    // Exit the loop
    // Write to the log file
}

console.log(`a=${a}\nb=${b}\na+b=${a + b}`);

const fun=()=>{
    try{
        let a=0; 
        console.log("Program ran successfully");
        return;
    }
    catch(e){
        console.log("Error");
    }
    finally{
        console.log("I will run even when the function is returned from the try block.");
    }
}