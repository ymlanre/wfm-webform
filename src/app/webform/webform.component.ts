import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webform',
  templateUrl: './webform.component.html',
  styleUrls: ['./webform.component.css'],
})
export class WebformComponent implements OnInit {
  title = 'wfm-webform';
  webform: any = {};
  formHeader: string ;

  formToken = '5e5SD9DWLm72VrUsNGWl74omLt7b2K';

  constructor(private api: ApiService) {}

  getForm() {
    this.api.getWebform(this.formToken).subscribe((data) => {
      console.log(data);
      this.webform = data.data[0].fields;
      console.log(this.webform);
      
    });
  }

  ngOnInit() {
    this.getForm();
  }
}
