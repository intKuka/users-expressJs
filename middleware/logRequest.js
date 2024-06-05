import { id } from 'cls-rtracer';

const logRequest = (req, res, next) => {
  const options = { hour12: false, };
  const time = new Date().toLocaleTimeString([], options);
  const requestId = id();

  const log = `${time} -- ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} -- request-id: ${requestId}`

  console.log(log);
  next();
};

export default logRequest;