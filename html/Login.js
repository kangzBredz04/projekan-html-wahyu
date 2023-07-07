const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");


const dataUser =
[
  {
    username: "wahyu",
    password: "wahyu123",
    name: "Wahyu saja",
    status:"aktif"
  },
  {
    username: "anasyah",
    password: "anasyah123",
    name: "Shanaz Yohanasyah",
    status:"aktif"
  },
  {
    username: "dimas",
    password: "dimas123",
    name: "Dimas Firmansyah",
    status:"aktif"
  },
  {
    username: "ananda",
    password: "ananda123",
    name: "Ananda Pratama I B",
    status:"aktif"
  }
  ,{
    username: "irma",
    password: "irma123",
    name: "Ade Irma",
    status:"aktif"
  }
]



const buttonLogin = document.querySelector('#button-sign-in');
buttonLogin.addEventListener("click", (event) => {
  event.preventDefault()
  

  for (let index = 0; index < dataUser.length; index++) {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (username === dataUser[index].username && password === dataUser[index].password) {
      sessionStorage.setItem('name',dataUser[index].name)
      sessionStorage.setItem('username',dataUser[index].username)
  
      window.location = "index.html"; 
    }
  }
})


const buttonSignUp = document.querySelector("#button-sign-up")
buttonSignUp.addEventListener("click", (event) => {
  event.preventDefault()

  const dataName = document.querySelector("#input-name").value
  const dataUsername = document.querySelector("#input-user").value
  const dataPass = document.querySelector("#input-pass").value

  let baru = {
    username: dataUsername,
    password: dataPass,
    name: dataName,
    status:"aktip"
  }
  console.log(baru)
  dataUser.push(baru);
  console.log(dataUser)


  // dataUser[dataUser.length+1].name=dataName
  // dataUser[dataUser.length+1].username=dataUsername
  // dataUser[dataUser.length+1].password=dataPass
  // dataUser[dataUser.length+1].status="aktif"
})



signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});