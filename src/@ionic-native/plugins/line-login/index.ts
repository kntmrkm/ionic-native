import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface LineLoginResponse {
  userID: number;
  displayName: string;
  accessToken: string;
  pictureURL: string;
}

/**
 * @name Line Login
 * @description
 *
 * @usage
 * ```typescript
 * import { LineLogin, LineLoginResponse } from '@webta/ionic-native-line-login';
 * constructor(private lineLogin: LineLogin) { }
 * ```
 */
@Plugin({
  pluginName: 'LineLogin',
  plugin: 'cordova-oauth-login', // npm package name, example: cordova-plugin-camera
  pluginRef: 'lineLogin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: [] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class LineLogin extends IonicNativePlugin {
  @Cordova()
  initialize(param: {}): Promise<any> { return; }

  @Cordova()
  login(param: {}): Promise<LineLoginResponse> { return; }

  @Cordova()
  logout(): Promise<any> { return; }

  @Cordova()
  getAccessToken(): Promise<string> { return; }

  @Cordova()
  verifyAccessToken(): Promise<string> { return; }

  @Cordova()
  refreshAccessToken(): Promise<string> { return; }
}
