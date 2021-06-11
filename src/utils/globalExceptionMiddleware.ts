import { errorResponse, Response } from './lambda-response';

export const globalExceptionMiddleware = async (
  callBack: Function,
  event: AWSLambda.APIGatewayEvent
): Promise<Response> => {
  try {
    return await callBack(event);
  } catch (error) {
    if (error.name === 'UnauthorizedError') return errorResponse(401, { message: error.message });
    if (error.name === 'BadRequestError')
      return errorResponse(400, { message: error.message });
    return errorResponse(500, { message: error.message });
  }
};
