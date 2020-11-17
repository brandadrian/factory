import { Component, OnInit } from '@angular/core';
import { StravaService } from './strava.service';
import { RunningEvent } from './running-event';
import { Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})
export class StravaComponent implements OnInit {

  public runningEvents: Array<RunningEvent> = new Array<RunningEvent>();
  public runningEventInput: string;

  private readonly runningEventSubject: Subject<void> = new Subject<void>();

  constructor(private commonService: StravaService) {
    this.runningEventInput = '';
  }

  ngOnInit() {
    this.runningEventSubject.pipe(
      switchMap(
        () => {
          return this.commonService.getRunningEvents();
      })).
      subscribe(response => { this.runningEvents = response; })
    
    this.runningEventSubject.next();
  }

  onAddEventClick(): void {
    if (this.runningEventInput != '') {
      const runningEvent = { _id: null, name: this.runningEventInput };
      this.commonService.setRunningEvent(runningEvent).subscribe(() => this.runningEventSubject.next());
    }
  }

  onRemoveEventClick(runningEvent: RunningEvent): void {
    console.warn(runningEvent)
    this.commonService.deleteRunningEvent(runningEvent).subscribe(() => this.runningEventSubject.next());
  }
}