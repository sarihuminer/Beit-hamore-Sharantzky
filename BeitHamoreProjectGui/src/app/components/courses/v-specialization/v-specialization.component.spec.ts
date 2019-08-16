import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSpecializationComponent } from './v-specialization.component';

describe('VSpecializationComponent', () => {
  let component: VSpecializationComponent;
  let fixture: ComponentFixture<VSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
