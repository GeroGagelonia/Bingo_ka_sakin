console.log("Hello world")
let B = false, I = false, N = false, G = false, O = false;
let a = [];

function newNumber(maxNumber) {
  let x = Math.floor(Math.random() * maxNumber) + 1;
  let x1 = Math.floor(Math.random() * 15) + 1;
  let x2 = Math.floor(Math.random() * 15) + 1;
  let x3 = Math.floor(Math.random() * 15) + 1;
  let x4 = Math.floor(Math.random() * 15) + 1;


  let i1 = Math.floor(Math.random() * 15) + 16;
  let i2 = Math.floor(Math.random() * 15) + 16;
  let i3 = Math.floor(Math.random() * 15) + 16;
  let i4 = Math.floor(Math.random() * 15) + 16;
  let i5 = Math.floor(Math.random() * 15) + 16;


  let n1 = Math.floor(Math.random() * 15) + 31;
  let n2 = Math.floor(Math.random() * 15) + 31;
  let n3 = Math.floor(Math.random() * 15) + 31;
  let n4 = Math.floor(Math.random() * 15) + 31;
  let n5 = Math.floor(Math.random() * 15) + 31;


  let g1 = Math.floor(Math.random() * 15) + 46;
  let g2 = Math.floor(Math.random() * 15) + 46;
  let g3 = Math.floor(Math.random() * 15) + 46;
  let g4 = Math.floor(Math.random() * 15) + 46;
  let g5 = Math.floor(Math.random() * 15) + 46;


  let o1 = Math.floor(Math.random() * 15) + 61;
  let o2 = Math.floor(Math.random() * 15) + 61;
  let o3 = Math.floor(Math.random() * 15) + 61;
  let o4 = Math.floor(Math.random() * 15) + 61;
  let o5 = Math.floor(Math.random() * 15) + 61;

  //if ... else if...else statement
  //conditional ope
  // GTE > =, LTE < =,EQ ==,NEQ ! =, AND &&, OR ||
  if (x <= 15) {
    console.log(`New number ${x} belongs to "B" `);
    B = true;
    BNum = x;
    if (!a.includes(x)) {

      document.querySelector("#gero1").textContent = x;
      a.push(x);

    }
    if (!a.includes(x1)) {

      document.querySelector("#gero6").textContent = x1;
      a.push(x1);

    }
    if (!a.includes(x2)) {

      document.querySelector("#gero11").textContent = x2;
      a.push(x2);

    } if (!a.includes(x3)) {

      document.querySelector("#gero16").textContent = x3;
      a.push(x3);

    } if (!a.includes(x4)) {

      document.querySelector("#gero21").textContent = x4;
      a.push(x4);

    }


  } else if (x >= 16 && x <= 30) {
    console.log(`New number ${x} belongs to "I" `);
    I = true;
    INum = x;

   if (!a.includes(i1)) {

      document.querySelector("#gero2").textContent = i1;
      a.push(i1);

    }
    if (!a.includes(i2)) {

      document.querySelector("#gero7").textContent = i2;
      a.push(i2);

    }
    if (!a.includes(i3)) {

      document.querySelector("#gero12").textContent = i3;
      a.push(i3);

    } if (!a.includes(i4)) {

      document.querySelector("#gero17").textContent = i4;
      a.push(i4);

    } if (!a.includes(i5)) {

      document.querySelector("#gero22").textContent = i5;
      a.push(i5);

    }

  } else if (x >= 30 && x <= 45) {
    console.log(`New number ${x} belongs to "N" `);
    N = true;
    NNum = x;
    if (!a.includes(n1)) {

      document.querySelector("#gero3").textContent = n1;
      a.push(n1);

    }
    if (!a.includes(n2)) {

      document.querySelector("#gero8").textContent = n2;
      a.push(n2);

    }
   
     if (!a.includes(n4)) {

      document.querySelector("#gero18").textContent = n4;
      a.push(n4);

    } if (!a.includes(n5)) {

      document.querySelector("#gero23").textContent = n5;
      a.push(n5);

    }
  } else if (x >= 45 && x <= 60) {
    console.log(`New number ${x} belongs to "G" `);
    G = true;
    GNum = x;
    if (!a.includes(g1)) {

      document.querySelector("#gero4").textContent = g1;
      a.push(g1);

    }
    if (!a.includes(g2)) {

      document.querySelector("#gero9").textContent = g2;
      a.push(g2);

    }
    if (!a.includes(g3)) {

      document.querySelector("#gero14").textContent = g3;
      a.push(g3);

    } if (!a.includes(g4)) {

      document.querySelector("#gero19").textContent = g4;
      a.push(g4);

    } if (!a.includes(g5)) {

      document.querySelector("#gero24").textContent = g5;
      a.push(g5);

    }
    
  } else if (x >= 60 && x <= 75) {
    console.log(`New number ${x} belongs to "O" `);
    O = true;
    ONum = x;
    if (!a.includes(o1)) {

      document.querySelector("#gero5").textContent = o1;
      a.push(o1);

    }
    if (!a.includes(o2)) {

      document.querySelector("#gero10").textContent = o2;
      a.push(o2);

    }
    if (!a.includes(o3)) {

      document.querySelector("#gero15").textContent = o3;
      a.push(o3);

    } if (!a.includes(o4)) {

      document.querySelector("#gero20").textContent = o4;
      a.push(o4);

    } if (!a.includes(o5)) {

      document.querySelector("#gero25").textContent = o5;
      a.push(o5);

    }
   
  }

  else {
    console.log(`New number ${x} is invalid.`);
  }
  if (B == true && I == true && N == true && G == true && O == true) {
    console.log(`Wow Bingo Ka Sakin :>!!!`);
    console.table({
      B: BNum, I: INum, N: NNum, G: GNum, O: ONum,
    });
  }


}
newNumber(75);

while (B == false || I == false || N == false || G == false || O == false) {
  newNumber(75);
}
