import AuthForm from "../components/AuthForm";
import { BASE_URL } from "../constants";
import { redirect } from "react-router-dom";

const AuthenticationPage = () => <AuthForm />;

export default AuthenticationPage;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { searchparams } = new URL(request.url);

  const mode = searchparams.get("mode") || "signup";

  if (mode !== "login" || mode !== "signup")
    throw Response(
      JSON.stringify({ message: "Unsupprted Mode." }, { status: 422 })
    );

  const response = await fetch(`${BASE_URL}${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 422 || request.status === 401) {
    return response;
  }

  if (!response.ok)
    throw new Response(
      JSON.stringify(
        { message: "Could not authenticate user." },
        { status: 500 }
      )
    );

  const { token } = await response.json();
  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
};
