import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingGardeningComponent } from './teaching-gardening.component';

describe('TeachingGardeningComponent', () => {
  let component: TeachingGardeningComponent;
  let fixture: ComponentFixture<TeachingGardeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingGardeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingGardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
