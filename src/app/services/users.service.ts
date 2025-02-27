import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private studentsUrl = 'assets/student.json';
  private attendanceUrl = 'http://localhost:8090/api/users/submit-attendance';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentsUrl);
  }

  submitAttendance(attendanceData: { date: string; present: string; name: string; pin: string }[]): Observable<any> {
    return this.http.post(this.attendanceUrl, attendanceData);
  }
}

  // getStudentAttendance(pin: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.attendanceUrl}?search=pin&value=${pin}`);
  // }

