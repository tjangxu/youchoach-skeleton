import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) {
  }

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8080/hello-world', {responseType: 'text'}).pipe(
      catchError(this.handleError('hello-world'))
    );
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      console.error(error);
      return throwError(error);
    };
  }
}
