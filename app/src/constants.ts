const {
  MODE: ENVIRONMENT,
  VITE_REACT_APP_SITE_KEY: RECAPTCHA_SITE_KEY,
  VITE_BACKEND_API: API_URL,
  VITE_PORT: PORT,
  VITE_ENV: ENV,
  VITE_BACKEND_STORGAE: STATIC_MEDIA_URL,
} = import.meta.env;

const MOBILE_VIEW = "(max-width: 600px)";
const DESKTOP_VIEW = "(min-width: 600px)";

export {
  ENVIRONMENT,
  RECAPTCHA_SITE_KEY,
  API_URL,
  PORT,
  ENV,
  STATIC_MEDIA_URL,
  MOBILE_VIEW,
  DESKTOP_VIEW,
};
