import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent {
  interests = [
    {
      name: 'Programming',
      description: 'Developing software and writing efficient code',
      },
      {
      name: 'Open source',
      description: 'Contributing to the open source community',
      },
      { name: 'Technology', description: 'Keeping up with the latest industry trends' },
      {
      name: 'Mathematics',
      description:
      'Understanding the mathematical concepts underlying programming',
      },
      { name: 'Music', description: 'Creating and manipulating digital sounds' },
      {
      name: 'Sports',
      description: 'Managing teams or collecting and analyzing sports data',
      },
      
  ];
}
