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
  @Input() isRequired: boolean = false;
  @Input() max: number | undefined;
  @Input() controlName: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const validators = [Validators.pattern('^[0-9]*$')];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.max !== undefined) {
      validators.push(Validators.max(this.max));
    }

    this.formGroup.addControl(
      this.controlName,
      new FormBuilder().control('', validators)
    );
  }

  get number() {
    return this.formGroup.get(this.controlName);
  }

  sanitize(value: string) {
    return this.sanitizer.sanitize(1, value);
  }
}