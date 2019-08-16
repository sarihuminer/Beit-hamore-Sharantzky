import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationToStudyComponent } from './registration-to-study.component';

describe('RegistrationToStudyComponent', () => {
  let component: RegistrationToStudyComponent;
  let fixture: ComponentFixture<RegistrationToStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationToStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationToStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
