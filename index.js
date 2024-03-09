let fristname = document.getElementById("fristname");
let scecondname = document.getElementById("scecondname");
let email = document.getElementById("email");
let fristpassword = document.getElementById("fristpassword");
let scecondpassword = document.getElementById("scecondpassword");
let login = document.getElementById("submit");
let haveaccount = document.getElementById("haveaccount");
let a = document.getElementById("a");

//get data -----------------------------------------------------------------------------------------------------------------------

let dataall = [];
if (localStorage.data != null) {
  dataall.push[JSON.parse(localStorage.data)];
} else {
  dataall = [];
}

function alldata() {
  let newdata = {
    fristname: fristname.value,
    scecondname: scecondname.value,
    email: email.value,
    fristpassword: fristpassword.value,
    scecondpassword: scecondpassword.value,
  };
  dataall.push(newdata);
  localStorage.setItem("data", JSON.stringify(dataall));

  if (
    (scecondpassword.style.boxShadow =
      "inset 10px 10px 30px green" &&
      email.value != "" &&
      fristname.value != "" &&
      scecondname.value != "" &&
      email.value != "@gmail.com")
  ) {
    claer();
  }

  email.value = "@gmail.com";
}

// clear data----------------------------------------------------------------------------------------------------------------------

function claer() {
  fristname.value = "";
  scecondname.value = "";
  email.value = "";
  fristpassword.value = "";
  scecondpassword.value = "";

  scecondpassword.style.boxShadow = "none";
  gotolog();
}

//password color----------------------------------------------------------------------------------------------------------------------

function password() {
  if (fristpassword.value != "") {
    if (
      fristpassword.value == scecondpassword.value &&
      fristpassword.value != ""
    ) {
      scecondpassword.style.boxShadow = "inset 0px 0px 15px green";
    } else if (
      fristpassword.value != scecondpassword.value &&
      fristpassword.value != ""
    ) {
      scecondpassword.style.boxShadow = "inset 0px 0px 15px red";
    } else if (scecondpassword.value == "") {
      scecondpassword.style.boxShadow = "none";
    }
  } else if (fristpassword.value == "") {
    scecondpassword.style.boxShadow = "none";
  }
}

function gotolog() {
  a.innerHTML = `
<a id="aa" href="https://mohammedel4nawy.github.io/login/">GO To Log Page</a>
`;
}
