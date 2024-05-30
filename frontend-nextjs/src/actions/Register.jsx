"use server";

// handle Error Server
function handleErrorServer(msg) {
  const errors = [];
  Object.keys(msg).map((key) => {
    msg[key].map((error) => {
      errors.push(error);
    });
  });
  //? console.log(errors);
  return errors.join();
}

async function register(state, formData) {
  const name = formData.get("Username");
  const email = formData.get("Email");
  const password = formData.get("password");
  const RepeatPassword = formData.get("RepeatPassword");
  //?   console.log(formData);

  // if (name == " " || password == "" || email == "") {
  //   return {
  //     error: "name and Email and password is require",
  //   };
  // }

  // if (password !== RepeatPassword) {
  //   return {
  //     error: "Password do not match",
  //   };
  // }

  const res = await fetch("http://127.0.0.1:8000/api/register", {
    method: "Post",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      c_password: RepeatPassword,
    }),
  });
  const data = await res.json();
  //? console.log(data);
  if (res.ok) {
    return {
      success: "you are registered",
    };
  } else {
    return {
      error: handleErrorServer(data),
    };
  }

  return <div></div>;
}

export { register };
