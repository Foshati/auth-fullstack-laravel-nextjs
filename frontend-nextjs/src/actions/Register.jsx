"use server";
import { cookies } from "next/headers";
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

  if (name == " " || password == "" || email == "") {
    return {
      error: "name and Email and password is require",
    };
  }

  if (password !== RepeatPassword) {
    return {
      error: "Password do not match",
    };
  }

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
}

async function login(state, formData) {
  const email = formData.get("Email");
  const password = formData.get("password");

  //?   console.log(formData);
  if (password == "" || email == "") {
    return {
      error: "Email and password is require",
    };
  }

  const res = await fetch("http://127.0.0.1:8000/api/login", {
    method: "Post",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  //? console.log(data);

  // cookies set token in status 200 ok
  if (res.ok) {
    cookies().set({
      name: "token",
      value: data.token,
      httpOnly: true,
    });
    return {
      success: "you are logged in",
      user: data.user,
    };
  } else {
    return {
      error: handleErrorServer(data),
    };
  }
}

export { register, login };
