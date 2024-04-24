async function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let customer = { username: username, password: password };
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  };
  try {
    let response = await fetch(getHost() + "/signin", request);
    if (response.status == 200) {
      alert("The login was successful!");
      const token = await response.text();
      saveTheToken(token);
      location.href = "index.html";
    } else {
      location.href = "index.html";

      console.log("response status: ${response.status}");
      removeTheToken();
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
    removeTheToken();
    alert("Something went wrong!");
  }
}