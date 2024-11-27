import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-input-text',
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent implements OnInit{
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() label: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.formGroup.addControl(
      'text',
      new FormBuilder().control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ])
    );
  }

  get text() {
    return this.formGroup.get('text');
  }

  sanitize(value: string) {
    return this.sanitizer.sanitize(1, value);
  }
}

