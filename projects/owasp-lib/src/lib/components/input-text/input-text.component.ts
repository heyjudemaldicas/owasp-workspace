import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import "@angular/compiler";

@Component({
  selector: 'lib-input-text',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
  exportAs: 'InputTextComponent'
})
export class InputTextComponent implements OnInit{
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() label: string = '';
  @Input() isRequired: boolean = false;
  @Input() controlName: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const validators = [Validators.pattern('^[a-zA-Z0-9 ]*$')];
    if (this.isRequired) {
      validators.push(Validators.required);
    }

    this.formGroup.addControl(
      this.controlName,
      new FormBuilder().control('', validators)
    );
  }

  get text() {
    return this.formGroup.get(this.controlName);
  }

  sanitize(value: string) {
    return this.sanitizer.sanitize(1, value);
  }
}

