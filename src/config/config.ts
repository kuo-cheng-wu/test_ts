import convict from 'convict';
import toml from 'toml';

export interface EnvConfig {
  env: string;
  port: number;
  contentPolicy: boolean;
}
// Setup schema
export const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  contentPolicy: {
    doc: 'contentPolicy state',
    default: true,
  },
});

// Load environment dependent configuration
convict.addParser({ extension: 'toml', parse: toml.parse });
const env = config.get('env');
config.loadFile(`./environment/${env}.toml`);

export function getConfig(): convict.Config<EnvConfig> {
  return config;
}
