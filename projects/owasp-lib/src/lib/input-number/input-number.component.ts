import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-input-number',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
  exportAs: 'InputNumberComponent'
})

export class InputNumberComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() label: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.formGroup.addControl(
      'number',
      new FormBuilder().control('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])
    );
  }

  get number() {
    return this.formGroup.get('number');
  }

  sanitize(value: string) {
    return this.sanitizer.sanitize(1, value);
  }
}