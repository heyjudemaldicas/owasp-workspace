import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwaspLibComponent } from './owasp-lib.component';

describe('OwaspLibComponent', () => {
  let component: OwaspLibComponent;
  let fixture: ComponentFixture<OwaspLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwaspLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwaspLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
