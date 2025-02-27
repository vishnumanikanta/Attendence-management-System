import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  // private baseurl = 'https://sheetdb.io/api/v1/ufhcmy700kud6';
  private attendanceUrl = 'http://localhost:8090/api/users/faculty-attendance';
  constructor(private http: HttpClient) {}

  // getStudents(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseurl}`);
  // }

  getStudentAttendance(pin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.attendanceUrl}?search=pin&value=${pin}`);
  }
  
}
