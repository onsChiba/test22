import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuChoixService {
  public couleurFondPreferee: string = "yellow";
  constructor() { }
}
