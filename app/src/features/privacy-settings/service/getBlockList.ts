import { API_URL } from "@constants";

import { BlockedUserProps } from "../BlockItem";

async function getBlockList() {
  const response = await fetch(`${API_URL}/users/block`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message);
  return data.users as BlockedUserProps[];
}

export default getBlockList;
