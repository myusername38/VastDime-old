import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string) {
    // do somethint else for this but for now this works
    return true;
  }
}
