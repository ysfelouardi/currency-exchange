import config from "../config";

export const HTTP_METHODS = Object.freeze({
  GET: { method: "GET" },
  POST: { method: "POST" },
  PUT: { method: "PUT" },
  PATCH: { method: "PATCH" },
  DELETE: { method: "DELETE" },
});
export const CONTENT_TYPE = Object.freeze({
  JSON: { "Content-Type": "application/json" },
  FORM_ENCODED: { "Content-Type": "application/x-www-form-urlencoded" },
  MULTIPART: { "Content-Type": "form/multipart" },
});

export const responseMiddleware = async (response: Response) => {
  if (response.ok) {
    return response;
  }

  if (response.status === 401 || response.status === 403) {
    //handle unauthorized
  }

  const error = new Error(response.statusText);
  // @ts-ignore
  error["status"] = response.status;
  let res: string | object;
  try {
    res = JSON.parse(await response.text());
  } catch (e) {
    res = await response.text();
  }

  // @ts-ignore
  error["response"] = res || {};
  return Promise.reject(error);
};

export const request = (url: string, options: object) =>
  fetch(`${config.BASE_URL}/${url}`, options)
    .then(responseMiddleware)
    .then((res) => res.text())
    .then((e) => (!e ? {} : JSON.parse(e)));

export const requestForBlob = (url: string, options: object) =>
  fetch(`${config.BASE_URL}/${url}`, options)
    .then(responseMiddleware)
    .then((res) => res.blob());

export const http = (
  url: string,
  method: object,
  data = {
    headers: {},
    body: {},
  },
  forBlob = false
) => {
  const { headers = { ...CONTENT_TYPE.JSON }, body } = data;

  const params = [
    url,
    {
      ...method,
      headers,
      ...(forBlob
        ? { body }
        : Object.keys(body).length === 0
        ? {}
        : { body: JSON.stringify(body) }),
    },
  ];

  // @ts-ignore
  return (forBlob ? requestForBlob : request)(...params);
};
