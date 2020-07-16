import { Component, OnInit } from '@angular/core';

// ActivatedRoute, will be used for subscribing to the parameter
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-component',
  template: `
     <h2>The About Component</h2>
     <div>
       <strong>{{message}}</strong>
     </div>
  `
})

export class AboutComponent implements OnInit {
  message: string;
  // inject the ActivatedRoute
  constructor(private act: ActivatedRoute) {
    this.message = 'This is the About Component.';
  }

  // subscribe to the Route Parameter to read the Parameter value
  // this value is always 'string'
  ngOnInit() {
     this.act.params.subscribe((p) => {
       this.message += ` With Value ${p.id}`;
     });
  }

}
