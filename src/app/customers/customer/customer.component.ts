import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private fireStore :  AngularFirestore) { }

  ngOnInit() {
    this.resetform();
  }
  resetform(form?: NgForm) {
    if (form != null)
      form.reset();
    this.customerService.formData = {
      id: null,
      name: "",
      address: "",
      phonNumber: "",
    }
  }
  onSubmit(form?: NgForm){
    let data= form.value;
    this.fireStore.collection("customers").add(data);
    this.resetform(form);
  }

}
