import { Component, OnInit } from '@angular/core';
import {In} from '../shared/in';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {InMokeService} from './in.moke.service';
@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {
in:In[];
InGroup:FormGroup;
  constructor(private ims:InMokeService, private fb:FormBuilder){
    this.InGroup = this.fb.group({
      ntransfert:['',Validators.required],
      mtn:['',Validators.required],
      frais:['',Validators.required],
      sms:['']
    })
  }

  ngOnInit() {
    this.in = this.ims.getIns();
  }

}
