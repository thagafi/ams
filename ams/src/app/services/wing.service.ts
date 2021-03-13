import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class WingService extends RestService {
  endpoint(): string {
    return "wings";
  }
}
