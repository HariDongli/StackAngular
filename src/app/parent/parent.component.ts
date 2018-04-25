import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
  }
  onActivate(event){
      this.ds.getData().subscribe(x=>{
        event.data = x;
      })

      
  }
}
