import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../services/resources.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private service:ResourcesService) { }

  affectations:any;
  valve: number=1;
  locatiares: any;
  quittance:any;
  biens: any;
  ngOnInit(): void {
    this.getAffectations();
    this.getLocataires();
  }


  getAffectations(){
    this.service.getResource('affectations?projection=p2').subscribe( data=> {
      // @ts-ignore
      this.affectations = data['_embedded'] ;
      // @ts-ignore
    console.log(this.affectations)
    },error => {
      console.log(error)
    })
  }
  getLocataires(){
    this.service.getResource('locataires').subscribe( data=>{
      // @ts-ignore
      this.locatiares = data['_embedded'].locataires ;

    },error => {
      console.log(error)
    })
  }
getBiens()
{
  this.service.getResource('biens').subscribe( data => {
    // @ts-ignore
    this.biens = data['_embedded'].biens ;
    console.log(this.biens)
  },error => {
    console.log(error)
  })
}
  ongetLocaires() {
    this.valve = 2;
  }

  ongetReservation() {
    this.valve = 1;
  }



  getQuittance(aff: any) {
    this.quittance = aff ;
    this.valve = 3
  }

  ongetBiens() {
    this.valve = 4 ;
    this.getBiens()
  }
}
