import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent implements OnInit {
  addForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private tripDataService: TripDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.addForm = this.fb.group({
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
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.addForm.valid) {
      this.tripDataService.addTrip(this.addForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        }
      });
    }
  }
  get f() {
    return this.addForm.controls;
  }
}
