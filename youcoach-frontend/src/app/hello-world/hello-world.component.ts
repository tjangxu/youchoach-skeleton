import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  private message;

  constructor(private helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    this.helloWorldService.getMessage().subscribe(result => {
      console.log(result);
      this.message = result;
    });
  }

}
