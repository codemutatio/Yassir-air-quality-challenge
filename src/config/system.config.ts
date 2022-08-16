import { DEPLOYED_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS } from './constants';
import { Environment } from './types';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 9091,
  isProduction: PRODUCTION_ENVIRONMENTS.includes(
    Environment[process.env.APP_ENV],
  ),
  isDeployedApplication: DEPLOYED_ENVIRONMENTS.includes(
    Environment[process.env.APP_ENV],
  ),
});
