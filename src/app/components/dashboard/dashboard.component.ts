import { Component, OnInit } from '@angular/core';
import { CommonService } from  '../../services/common.service';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

export interface DepartmentData {
  id: number;
  name: string;
  state: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService:CommonService ) { }
  filter : string = '';
  ngOnInit(): void {
    this.getList("");
    
  }

  displayedColumns: string[] = ['id', 'name', 'state'];
  dataSource:DepartmentData[]=[];
  length=10;
  pageSize=5;
  offset=0;
  //pageIndex=0;

    getList(filter:string):void {
      console.log("Inside getList()");
      const data = this.commonService.getDepartmentList(filter,"a",this.pageSize,this.offset).subscribe(
        (val:any) => {
            console.log("GET call successful value returned in body", 
                        val);
             this.dataSource = val.data.rows;
             this.length=val.data.count;                        
        },
        (response:any) => {
            console.log("GET call in error", response);
           
        },
        () => {
            console.log("The GET observable is now completed.");
        });;

      


    }

    filterByName(formValue : NgForm): void {
      this.offset=0;
      this.getList(this.filter);      
    }    

    getPaginatorData(event: PageEvent) {
      this.offset = event.pageIndex * event.pageSize;
      console.log("event.pageIndex=",event.pageIndex);
      this.getList(this.filter);
    }
  
}
