import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrl: './participant-item.component.scss'
})
export class ParticipantItemComponent {
  @Input() name: string = '';
  @Input() attendance: number = 0;
  @Input() score: number = 0;
}
