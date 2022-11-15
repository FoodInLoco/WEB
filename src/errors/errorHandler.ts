import { ApiError } from './apiErrors';
import { LocalError } from './localErrors';
export const handleErrors = (error: any) => {
  const { request, response } = error;
  if (response) {
    const { status, data, statusText } = response;

    throw new ApiError({
      message: data,
      status,
      title:statusText,
    });
  }
  if (request) {
    throw new LocalError({
      message: 'server time out',
      status: 503,
      title: 'danger',
    });
  }
  throw new LocalError({
    message: 'opps! something went wrong',
    status: 500,
    title: 'danger',
  });
};