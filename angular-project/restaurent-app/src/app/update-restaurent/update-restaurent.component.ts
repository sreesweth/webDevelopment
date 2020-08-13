import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert:boolean=false;
editRestaurent=new FormGroup({
  id :new FormControl(''),
  Name:new FormControl(''),
  address: new FormControl(''),
  mobile : new FormControl(''),
  email: new FormControl('')
});

  constructor(private resto:CommonService, private router:ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getcurrentdata(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurent=new FormGroup({
        id :new FormControl(result['id']),
        Name:new FormControl(result['Name']),
        address: new FormControl(result['address']),
        mobile : new FormControl(result['mobile']),
        email: new FormControl(result['email'])
      });

    })
  }  
}
