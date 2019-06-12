const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-uq11prldgq8w"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://l5vc4h2anc.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_KY8SQ4z3Z",
    APP_CLIENT_ID: "4lj8j7cnr796u9838qfdv5v5kv",
    IDENTITY_POOL_ID: "us-east-2:0a2fe00a-5d55-4e63-a979-629300757139",
  },

  STRIPE_KEY: "pk_test_q8JUIQrkCcpX59rvECcckR0700rRFOlVKp"
 
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1i385lpe4qbg1"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://koj6mkpth4.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2:ac5be54c-4f91-478c-a445-fd66501a3393",
    APP_CLIENT_ID: "3vcsvg2klisedn7jpkp0uujquq",
    IDENTITY_POOL_ID: "us-east-2:ac5be54c-4f91-478c-a445-fd66501a3393",
  },

  STRIPE_KEY: "pk_test_q8JUIQrkCcpX59rvECcckR0700rRFOlVKp"
 
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};