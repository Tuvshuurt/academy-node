const addBtn = document.getElementById("submit");



const addBtnFunc = async() => {
  
  const contentElement = document.getElementById("email");
  const listElement = document.getElementById("password");
  const email = contentElement.value;
  const password = listElement.value;


const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

}

addBtn.addEventListener("click", addBtnFunc);
