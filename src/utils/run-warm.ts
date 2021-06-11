const runWarm = (lambdaFunc: Function): AWSLambda.Handler => async (event, context) => {
    if (event.source === 'serverless-plugin-warmup') {
      return 'pinged';
    }
  
    return lambdaFunc(event, context);
  };
  
  export default runWarm;
  