import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCoursesComponent } from './v-courses.component';

describe('VCoursesComponent', () => {
  let component: VCoursesComponent;
  let fixture: ComponentFixture<VCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
