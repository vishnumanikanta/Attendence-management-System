import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  students: Users[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getStudents().subscribe(data => this.students = data);
  }

  submitAttendance(): void {
    const attendanceData = this.students.map(student => ({
      date: this.selectedDate,
      present: student.present, 
      name: student.name,
      pin: student.pin
    }));
  
    this.usersService.submitAttendance(attendanceData).subscribe(
      response => console.log('Attendance submitted successfully', response),
      error => console.error('Error submitting attendance', error)
    );
  }
  updateAttendance(event: Event, student: Users): void {
    const inputElement = event.target as HTMLInputElement;
    student.present = inputElement.checked ? 'Present' : 'Absent';
  }
  
}
