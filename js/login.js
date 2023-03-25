function validate() {
  let name = document.getElementById("user").value;
  let pass = document.getElementById("pwd").value;

  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (nameRegex.test(full_name) == false) alert("Invalid name");
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email) === false) alert("invalid email");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (passwordRegex.test(password) === false) alert("Invalid password");
}
