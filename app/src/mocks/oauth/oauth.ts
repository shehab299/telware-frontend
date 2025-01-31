import { http, HttpResponse } from "msw";
import { MOCK_USER1, TOKEN } from "@mocks/data/users";

type RequestBody = {
  code: string;
};

type ResponseBodySuccess = {
  status: "success";
  message: string;
  data: {
    user: {};
    sessionID: string;
  };
};

type ResponseBodyFail = {
  status: "fail" | "error";
  message: string;
  data: {};
};

type ResponseBody = ResponseBodySuccess | ResponseBodyFail;

export const OauthMock = [
  http.post<{}, RequestBody, ResponseBody>("/auth/oauth/google", async () => {
    return HttpResponse.json(
      {
        message: "Successful login",
        status: "success",
        data: {
          user: MOCK_USER1,
          sessionID: TOKEN,
        },
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `sessionID=${TOKEN}; HttpOnly; SameSite=Strict; Path=/`,
        },
      }
    );
  }),

  http.post<{}, RequestBody, ResponseBody>("/auth/oauth/github", async () => {
    return HttpResponse.json(
      {
        message: "Successful login",
        status: "success",
        data: {
          user: MOCK_USER1,
          sessionID: TOKEN,
        },
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `sessionID=${TOKEN}; HttpOnly; SameSite=Strict; Path=/`,
        },
      }
    );
  }),
];
