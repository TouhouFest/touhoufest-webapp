import type { CapacitorConfig } from '@capacitor/cli';
import dotenv from 'dotenv';
dotenv.config();

const config: CapacitorConfig = {
  appId: 'com.example.touhoufestwebapp',
  appName: 'TouhouFest',
  webDir: 'build',
  android: {
    buildOptions: {
      keystorePath: process.env.KEYSTOREPATH, 
      keystorePassword: process.env.KEYSTOREPASSWORD,
      keystoreAlias: process.env.KEYSTOREALIAS,
      keystoreAliasPassword: process.env.KEYSTOREALIASPASSWORD
    }
  }
};

export default config;