"use server";
async function register(state, formData) {
  console.log(formData);
  const name = formData.get("Username");
  const email = formData.get("Email");
  const password = formData.get("password");
  const RepeatPassword = formData.get("RepeatPasswords");
  //   console.log(formData);

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

  return <div></div>;
}

export { register };
