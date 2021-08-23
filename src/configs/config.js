export function getConfig() {
  const audience =
    process.env.REACT_APP_AUTH0_AUDIANCE &&
    process.env.REACT_APP_AUTH0_AUDIANCE !== 'Madrid'
      ? process.env.REACT_APP_AUTH0_AUDIANCE
      : null;

  return {
    backEndServer: toString( process.env.SERVER_BACKEND ),
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENTID,
    ...( audience ? { audience } : null ),
  };
}
