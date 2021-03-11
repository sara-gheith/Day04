function main(){
    var myDecimal = 8.2;
    var myDecimalE = 245e-5;

    return {
        myDecimal,
        myDecimalE
    };
}

console.log(main());
module.exports = main;