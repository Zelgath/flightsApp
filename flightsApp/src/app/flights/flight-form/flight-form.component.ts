import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Crew, Flight } from 'src/app/models/flight.model';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
  @Input() editMode = false;

  form : FormGroup;
  jobs = [
    {label: 'Stewardess', value: 'stewardess'},
    {label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    {label: 'Pilot', value: 'pilot'},
    {label: 'Co-Pilot', value: 'co_pilot'},
    {label: 'Mechanic', value: 'mechanic'},
  ]

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  setFlight(flight : Flight) {
    this.form.get('code').patchValue(flight.code)
    this.form.get('origin').patchValue(flight.origin)
    this.form.get('destination').patchValue(flight.destination)
    this.form.get('additionalInformation').patchValue(flight.additionalInformation)
    this.form.get('withSKPlanesDiscount').patchValue(flight.withSKPlanesDiscount)
    this.form.get('departureDate').patchValue(this.getDate(flight.departureTime))
    this.form.get('returnDate').patchValue(this.getDate(flight.returnTime))
    this.form.get('departureTime').patchValue(this.getTime(flight.departureTime))
    this.form.get('returnTime').patchValue(this.getTime(flight.returnTime))
    flight.crew?.forEach(crewMember=> 
      this.addCrewMember(crewMember)
      )
    this.crew?.patchValue(flight?.crew)
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: '',
      job: ''
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group( {
      origin: ['', {validators: [Validators.required]}],
      destination: ['', {validators: [Validators.required]}],
      departureDate: ['', {validators: [Validators.required]}],
      returnDate: ['', {validators: [Validators.required]}],
      departureTime: ['', {validators: [Validators.required]}],
      returnTime: ['', {validators: [Validators.required]}],
      code: ['SK', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)]}],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    })
  }

  private getTime(dateTime : string) : string{
    return dateTime?.slice(-5);
  }

  private getDate(dateTime? : string) : Moment {
    if (dateTime){
    const cutTime = dateTime?.substring(0,dateTime.length-7);
    const year = cutTime?.slice(-4)
    const month = cutTime?.slice(-7,-5)
    const day = cutTime?.slice(0, cutTime.length-8)
    return moment(`${month}?-${day.length == 1 ? 0+day : day}?-${year}? 00:00 AM`, 'MM-DD-YYYY hh:mm A')
    }
  }

}
