let a=prompt("Ismingizni kiriting");
let b=+prompt("Yoshingizni kiriting");
let c=prompt("Shaxringizni kiriting");
let user={
    a,
    b,
    c
};


for (const property in user) {
    console.log(` ${user[property]}`);
  }
  