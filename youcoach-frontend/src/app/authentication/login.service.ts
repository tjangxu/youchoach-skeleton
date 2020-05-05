import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {
  }

  login(loginData): Observable<any> {
    return this.http.post<any>(this.url, loginData, {observe: 'response'}).pipe(
      catchError(this.handleError('login'))
    );
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      console.error(error);
      return throwError(error);
    };
  }
}
