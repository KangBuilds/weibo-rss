import { AxiosError } from "axios";

export const TIME_OUT = 3000;
export const MOCK_UA = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36';

export const handleForbiddenErr = (err: AxiosError, cb: () => Promise<void>) => {
  if (err.response && [418, 403].includes(err.response.status)) {
    return cb();
  } else {
    return Promise.reject(err);
  }
}
