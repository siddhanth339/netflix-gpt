export const validateForm = (email, password, name) => {
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  const nameCheck = /[a-zA-Z]*/.test(name);

  if (!emailCheck) return "Email is invalid";
  if (!passwordCheck) return "Password is invalid";
  if (name !== undefined && !nameCheck) return "Name is invalid";

  return null;
};
