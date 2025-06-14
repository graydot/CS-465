import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  submitted: boolean = false;
  trip!: Trip;
  message: string = '';
  tripCode: string = '';
  constructor(
    private fb: FormBuilder,
    private tripDataService: TripDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.tripCode = localStorage.getItem('tripCode') || '';
    if (!this.tripCode) {
      alert("Something went wrong, couldn't find where i stashed tripCode");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.fb.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.tripDataService.getTrip(this.tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;
        this.editForm.patchValue(value[0]);
        if (!value) {
          this.message = 'No Trip Retrieved!';
        } else {
          this.message = 'Trip ' + this.tripCode + ' retrieved!';
        }
        console.log(this.message);
      },
      error: (err: any) => {
        console.error("Error " + err);
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (err: any) => {
          console.error("Error " + err);
        }
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}
