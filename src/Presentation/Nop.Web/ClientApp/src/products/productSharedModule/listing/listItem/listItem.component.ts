import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listItem.component.html',
  styleUrls: ['./listItem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input()
  item;
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
