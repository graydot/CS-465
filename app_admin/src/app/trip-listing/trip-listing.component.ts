import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  providers: [TripDataService],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Array<any> = [];
  message: string = '';
  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {
    console.log('TripListingComponent constructor');
  }
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  ngOnInit(): void {
    console.log('TripListingComponent ngOnInit');
    this.getStuff();
  }
  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'No trips available.';
        }
        console.log(this.message);
      },
      error: (err) => console.error("Error: " + err.message),
      complete: () => console.log('trips loaded')
    });
  }
}
