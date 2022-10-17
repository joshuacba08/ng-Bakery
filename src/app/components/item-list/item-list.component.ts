import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  arrayProducts: any[]=[]; //aca guardare mis productos

  constructor( private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getProducts().subscribe(
      resp => {
        this.arrayProducts = resp
        console.log(this.arrayProducts)
      }
    )

  }



}
