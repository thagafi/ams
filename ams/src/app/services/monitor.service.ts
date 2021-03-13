import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class MonitorService extends RestService{
  endpoint(): string {
    return "monitors";
  }
}
