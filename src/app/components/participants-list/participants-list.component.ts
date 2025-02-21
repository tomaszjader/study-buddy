import { Component } from '@angular/core';
import { ParticipantItemComponent } from '../participant-item/participant-item.component';

interface Participant {
  name: string;
  attendance: number;
  score: number;
}

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrl: './participants-list.component.scss'
})
export class ParticipantsListComponent {
  participants: Participant[] = [
    { name: 'Adam Romański', attendance: 38, score: 2.3 },
    { name: 'Krzysztof Batko', attendance: 38, score: 2.3 },
    { name: 'Patrycja Gonciarz', attendance: 38, score: 2.3 },
    { name: 'Olga Hahn', attendance: 38, score: 2.3 },
    { name: 'Paweł Andrzejewski', attendance: 38, score: 2.3 },
    { name: 'Szymon Knuth', attendance: 38, score: 2.3 },
    { name: 'Krystian Foczpaniak', attendance: 38, score: 2.3 }
  ];
}
