import { Component, OnInit } from '@angular/core';
import { TeamdetailsService } from '../../services/teamdetails.service'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit{
  POSTS: any;
 
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private teamdetails:TeamdetailsService){}
  ngOnInit() {
    this.fetchPosts();
      
  }


  fetchPosts(): void {
    this.teamdetails.getdata().subscribe(result=>
      this.POSTS=result);

  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
 

}
