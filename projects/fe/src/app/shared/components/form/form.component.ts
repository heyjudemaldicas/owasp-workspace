import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent, InputTextComponent } from 'owasp-lib';
import { LoggingService } from 'owasp-lib';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, InputNumberComponent, InputTextComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.loggingService.logInfo('Form Value:', this.form.value);
    }
  }
}
