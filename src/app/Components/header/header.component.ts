import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchForm= this.fb.group({
      search: new FormControl('')
    })
   }

  ngOnInit(): void {
    
  }
  onSubmit(){

  }

}
