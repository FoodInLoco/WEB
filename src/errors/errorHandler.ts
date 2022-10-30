import { ApiError } from './apiErrors';
import { LocalError } from './localErrors';
export const handleErrors = (error: any) => {
  const { request, response } = error;
  if (response) {

    const { message, title, code } = response.data;
    const { status } = response;

    throw new ApiError({
      message,
      status,
      title,
      code,
    });
  }
  if (request) {
    throw new LocalError({
      message: 'server time out',
      status: 503,
      title: 'danger',
      code: 1,
    });
  }
  throw new LocalError({
    message: 'opps! something went wrong',
    status: 500,
    title: 'danger',
    code: 1,
  });
};