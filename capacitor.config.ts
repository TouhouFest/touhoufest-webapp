import type { CapacitorConfig } from '@capacitor/cli';
import dotenv from 'dotenv';
dotenv.config();

const config: CapacitorConfig = {
  appId: 'com.touhou.touhoufestwebapp',
  appName: 'TouhouFest',
  webDir: 'build',
  plugins: {
    LocalNotifications: {
      iconColor: "#D72640",
      smallIcon: "favicon"
    },
    CapacitorCookies: {
      enabled: true
    },
    EdgeToEdge: {
      backgroundColor: "#000000"
    },
  },
  android: {
    buildOptions: {
      keystorePath: process.env.KEYSTOREPATH, 
      keystorePassword: process.env.KEYSTOREPASSWORD,
      keystoreAlias: process.env.KEYSTOREALIAS,
      keystoreAliasPassword: process.env.KEYSTOREALIASPASSWORD
    }
  },
  ios: {
    scheme: "TouhouFest",
    // contentInset: "always"
  }
};

export default config;