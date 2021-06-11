interface JSON {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }
  
  interface ResponseOptions {
    json: JSON;
    statusCode: number;
  }
  
  export interface Response {
    statusCode: number;
    body: string;
    headers: {};
  }
  
  function lambdaResponse({ json, statusCode }: ResponseOptions): Response {
    return {
      statusCode,
      body: JSON.stringify(json),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  }
  
  export function errorResponse(code: number, json: JSON): Response {
    return lambdaResponse({
      json,
      statusCode: code,
    });
  }
  
  export function successResponse(json: JSON): Response {
    return lambdaResponse({
      json,
      statusCode: 200,
    });
  }
  