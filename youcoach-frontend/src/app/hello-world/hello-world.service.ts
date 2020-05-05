import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<string>('http://localhost:8080/hello-world');
  }
}
