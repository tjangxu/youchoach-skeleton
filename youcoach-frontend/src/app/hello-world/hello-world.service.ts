import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) {
  }

  getMessage(): Observable<string> {
    return this.http.get('http://localhost:8080/hello-world', {responseType: 'text'}).pipe(
      catchError(this.handleError<any>('hello-world'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
