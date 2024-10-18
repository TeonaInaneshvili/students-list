import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './models/student.interface';
import { RouterOutlet } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CommonModule } from '@angular/common';
import { UserCustomDirective } from './user-custom.directive';
import { ScorePipe } from './score.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, StudentsListComponent, CommonModule, UserCustomDirective, ScorePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular1';

  public : string='';
  public studentFirstName: string='';
  public studentLastName: string='';
  public studentAge: number=0;
  public studentUniversity: string='';
  public studentIsExchanging: boolean=false;
  public studentAverageScore: number=0;
  public studentCity: string='';

  public studentsArray: Student[] = [
    {
      firstName: 'ანი',
      lastName: 'დევდარიანი',
      age: 18,
      university: 'თეატრალური',
      isExchanging: true,
      averageScore: 84,
      city: 'თბილისი',
    },

    {
        firstName: 'ნინო',
        lastName: 'ვარდიძე',
        age: 20,
        university: 'ჯავახიშვილი',
        isExchanging: true,
        averageScore: 100,
        city: 'თბილისი',
      },


      {
        firstName: 'თამარი',
        lastName: 'ჯანგირაშვილი',
        age: 18,
        university: 'გორის უნივერსიტეტი',
        isExchanging: false,
        averageScore: 74,
        city: 'გორი',
      },
      {
        firstName: 'ვაჩე',
        lastName: 'ელბაქიძე',
        age: 22,
        university: 'ჯავახიშვილი',
        isExchanging: false,
        averageScore: 90,
        city: 'თბილისი'
      },
      {
        firstName: 'მარიამ',
        lastName: 'ხასაია',
        age: 19,
        university: 'ზუგდიდის უნივერსიტეტი',
        isExchanging: false,
        averageScore: 87,
        city: 'ზუგდიდი',
      },
      {
        firstName: 'დაჩი',
        lastName: 'ნადირაშვილი',
        age: 21,
        university: 'ილიაუნი',
        isExchanging: false,
        averageScore: 57,
        city: 'თბილისი'
      },
      {
        firstName: 'ანრი',
        lastName: 'ნანავა',
        age: 19,
        university: 'ილიაუნი',
        isExchanging: false,
        averageScore: 94,
        city: 'თბილისი'
      },
      {
        firstName: 'ნინო',
        lastName: 'მაისურაძე',
        age: 20,
        university: 'ტექნიკური უნივერსიტეტი',
        isExchanging: false,
        averageScore: 54,
        city: 'ქუთაისი'
      },
      {
        firstName: 'სალომე',
        lastName: 'ენუქიძე',
        age: 22,
        university: 'აკაკი წერეთლის უნივერსიტეტი',
        isExchanging: false,
        averageScore: 92,
        city: 'ქუთაისი'
      },

      {
        firstName: 'ანი',
        lastName: 'ჯავახაძე',
        age: 22,
        university: 'ჯავახიშვილი',
        isExchanging: false,
        averageScore: 78,
        city: 'თბილისი'
      },

  ];

  public addStudent(): void {
    this.studentsArray = [
      ...this.studentsArray,
      {
        firstName: this.studentFirstName,
        lastName: this.studentLastName,
        age: this.studentAge,
        university: this.studentUniversity,
        isExchanging: this.studentIsExchanging,  
        averageScore: this.studentAverageScore,   
        city: this.studentCity                      
      }
    ];
  

    this.studentFirstName = '';
    this.studentLastName = '';
    this.studentAge = 0;
    this.studentUniversity = '';
    this.studentIsExchanging = false;
    this.studentAverageScore = 0;
    this.studentCity = '';
  }
  
}
