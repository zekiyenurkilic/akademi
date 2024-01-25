import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})

// Yalnızca user rolüne bakıyor.

export class AuthService {
  constructor() { }

  getUserRole(): Role {
    /**
    * fake an API call
    */
    return Role.USER;
  }
}