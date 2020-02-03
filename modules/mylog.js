function info(text){
    console.log("INFO ",text);
    return text;
}

function error(text){
    console.log("ERROR ",text);
    return text;
}

//Global Export functions from another js file
module.exports = {info,error};


//Partial export function from another js file
module.exports.hhh = function hhh(text){
    console.log("HHH ",text);
    return text;
} 