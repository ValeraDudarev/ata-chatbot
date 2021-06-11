import { successResponse, runWarm, Response, globalExceptionMiddleware } from '../utils';

export const helloWorld: Function = runWarm(
    async (event: AWSLambda.APIGatewayEvent): Promise<Response> => {
      return await globalExceptionMiddleware(async (event: AWSLambda.APIGatewayEvent): Promise<Response> => {
        return successResponse({
          message: "Hello World!"
        });
      }, event);
    }
  );