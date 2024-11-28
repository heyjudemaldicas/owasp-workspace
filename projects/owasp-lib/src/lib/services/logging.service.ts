import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logError(message: string, data?: any): void {
    if (data !== undefined) {
      console.error(message, data);
    } else {
      console.error(message);
    }
  }

  logInfo(message: string, data?: any): void {
    if (data !== undefined) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }

  logWarning(message: string, data?: any): void {
    if (data !== undefined) {
      console.warn(message, data);
    } else {
      console.warn(message);
    }
  }
}
