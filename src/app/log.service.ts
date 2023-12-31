import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  messages: string[] = [];

  log(message: string) {
      console.log(new Date() + ": " + JSON.stringify(message));
  }

  clear() {
    this.messages = [];
  }
}