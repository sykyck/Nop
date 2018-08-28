import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { LegalService } from './legals.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss']
})
export class LegalsComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'picBackground');
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'picBackground');
  }
}
