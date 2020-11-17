import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RunningEvent } from './running-event';

@Injectable({
  providedIn: 'root'
})

export class StravaService {

  constructor(private http: HttpClient) { }

  deleteRunningEvent(runningEvent: RunningEvent): Observable<any> {
    return this.http.delete(`http://brandadrian.internet-box.ch:9200/running-event/${runningEvent._id}`);
  }

  setRunningEvent(runningEvent: RunningEvent): Observable<any> {
    return this.http.post(`http://brandadrian.internet-box.ch:9200/running-event`, { name: runningEvent.name });
  }

  getRunningEvents(): Observable<Array<RunningEvent>> {
    return this.http.get<Array<RunningEvent>>('http://brandadrian.internet-box.ch:9200/running-event');
  }
}
