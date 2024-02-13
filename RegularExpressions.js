//regexr.com

const regex= /Abiha/g; //replace globally
const info= "Abiha is 19 years old. Abiha is a student of NED University";
console.log(info.replace(regex, "ABIHA")); // matches pattern and jahan jahan pattern match horha globally wahan change krdy ga

console.log(info.replace("Abiha", "ABIHA")); // only changes the first occurence in a sectence, hence we will use regex 


const rege = /(Harry){2}/gi;
const text = "Harryharry is a very very nice awesome nice very boy";
console.log(text.replace(rege, "VERY"));