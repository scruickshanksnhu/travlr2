import { Component, OnInit } from '@angular/core';
//import { trips } from '../data/trips';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/SingleTrip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {

  trips: Trip[];
  message: string;

  constructor(private tripDataService: TripDataService, private router: Router) { }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for Trips';
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No Trips Found';
          this.trips = foundTrips;
        })
  }

  private addTrip():void{
    this.router.navigate(['add-trip']);
  }
  
  ngOnInit() {
    this.getTrips();
  }

}
