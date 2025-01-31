import { API_URL } from "@constants";
import { User } from "../LoginForm/LoginForm";

export async function login(user: User) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-credentials": "true",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });

  const data = await res.json();
  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}
