const form = document.getElementById('form')
const userName= document.getElementById('userName')
const postName = document.getElementById('postName')
const email = document.getElementById('email')
const tel = document.getElementById('tel')

form.addEventListener('submit', (e) => {
 e.preventDefault()

 checkInputs()
})

function checkInputs() {
    const userNameValue = userName.value
    const postNameValue = postName.value
    const emailValue = email.value
    const telValue = tel.value

    if (userNameValue === '') {
        setErrorFor(userName, "Campo Nome é Obrigatório.")
    } else {
        setSuccessFor(userName)
    }

    

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (postNameValue === "") {
    setErrorFor(postName, "O Sobrenome é obrigatório.");
  }  else {
    setSuccessFor(postName);
  }

  if (telValue === "") {
    setErrorFor(tel, "O Telefone com DDD é obrigatório.");
  }  else {
    setSuccessFor(tel);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}


function setErrorFor(input, message) {
   const formControl = input.parentElement
   const small = formControl.querySelector("small")
   //mensagem de erro
   small.innerText = message

   //classe de erro
   formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }