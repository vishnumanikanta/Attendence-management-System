import { Component } from '@angular/core';
import { FacultyService } from '../services/faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  pin: string = '';
  studentData: { pin: string; name: string } | null = null;
  presentDays: number = 0;
  absentDays: number = 0;
  presentPercentage: number = 0;
  absentPercentage: number = 0;

  constructor(private facultyService: FacultyService) {}

  searchStudent(): void {
    this.facultyService.getStudentAttendance(this.pin).subscribe((data: any[]) => {
      const filteredData = data.filter(record => record.pin === this.pin);
      if (filteredData.length) {
        this.presentDays = filteredData.filter(record => record.present === 'Present').length;
        this.absentDays = filteredData.filter(record => record.present === 'Absent').length;

        const totalDays = this.presentDays + this.absentDays;
        this.presentPercentage = totalDays > 0 ? (this.presentDays / totalDays) * 100 : 0;
        this.absentPercentage = totalDays > 0 ? (this.absentDays / totalDays) * 100 : 0;

        this.studentData = {
          pin: filteredData[0].pin,
          name: filteredData[0].name,
        };
      } else {
        this.resetResults();
        alert('No records found for the given PIN.');
      }
    });
  }

  private resetResults(): void {
    this.studentData = null;
    this.presentDays = 0;
    this.absentDays = 0;
    this.presentPercentage = 0;
    this.absentPercentage = 0;
  }
}
