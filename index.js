console.log("Hello world")
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

    let BNum, INum, NNum, GNum, ONum;

function newNumber(maxNumber){
    let x = Math.floor(Math.random() * maxNumber) + 1;
    //if ... else if...else statement
    //conditional ope
    // GTE > =, LTE < =,EQ ==,NEQ ! =, AND &&, OR ||
    if (x <= 15) {
      console.log(`New number ${x} belongs to "B"`);
      B = true;
      BNum = x;
    } else if (x >= 16 && x <= 30) {
        console.log(`New number ${x} belongs to "I"`)
        I = true;
        INum= x;
    }

    else if (x >= 30 && x <= 45) {
        console.log(`New number ${x} belongs to "N"`)
        N = true;
        NNum = x;
    }

    else if (x >= 45 && x <= 60) {
        console.log(`New number ${x} belongs to "G"`)
        G = true;
        GNum = x;
    }

    else if (x >= 60 && x <= 75) {
        console.log(`New number ${x} belongs to "O"`)
        O = true;
        ONum = x;
    }
    
    else {
        console.log(`New number ${x} is invalid.`);
    }

    if (B == true && I == true && N == true && G == true && O == true) {
            console.log(`wow na bingo!`);
            console.table({
                B: BNum,
                I: INum,
                N: NNum,
                G: GNum,
                O: ONum,
            });
    }
    
    return console.log(x);
}
while (!B || !I || !N || !G || !O ) {
    newNumber(75);
}
