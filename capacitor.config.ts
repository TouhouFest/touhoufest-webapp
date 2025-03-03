import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.touhoufestwebapp',
  appName: 'TouhouFest',
  webDir: 'build',
  plugins: {
    LocalNotifications: {
      iconColor: "#D72640",
      smallIcon: "favicon"
    }
  }
};

export default config;
