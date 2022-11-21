import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  event: Event | undefined;

  constructor(
    public eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.eventService.get(params['id']).subscribe((event) => this.event = event)
    );
  }

  onUpdate(eventForm: NgForm) {
    const modifiedEvent = {
      id: this.event?.id,
      ...eventForm.value
    }
    this.eventService.update(modifiedEvent).subscribe((event) => this.router.navigate(['/']));
  }
}
