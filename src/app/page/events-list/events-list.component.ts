import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  eventList: Observable<Event[]> = this.eventService.getAll();

  constructor(
    private eventService: EventService,
    private router: Router,
  ) { }

  goToEvent(event: Event) {
    this.router.navigate([`/event/${event.id}`]);
  }
}
