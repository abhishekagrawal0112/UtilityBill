import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-milk-bill',
  templateUrl: './milk-bill.component.html',
  styleUrls: ['./milk-bill.component.scss'],
})
export class MilkBillComponent implements OnInit {
  public calculateMilk: FormGroup;
  public sum: number;

  private days;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calculateMilk = this.fb.group({
      month: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
    });
  }

  get month(): AbstractControl {
    return this.calculateMilk.get('month');
  }
  get rate(): AbstractControl {
    return this.calculateMilk.get('rate');
  }
  calcDays() {
    if (
      this.month.value === 'january' ||
      this.month.value === 'march' ||
      this.month.value === 'may' ||
      this.month.value === 'july' ||
      this.month.value === 'august' ||
      this.month.value === 'october' ||
      this.month.value === ' december'
    ) {
      this.days = 31;
    } else if (this.month.value === 'february') {
      this.days = 28;
    } else if (
      this.month.value === 'april' ||
      this.month.value === 'june' ||
      this.month.value === 'september' ||
      this.month.value === 'november'
    ) {
      this.days = 30;
    }
  }

  calculate() {
    this.sum = this.days * this.rate.value;
  }
}
