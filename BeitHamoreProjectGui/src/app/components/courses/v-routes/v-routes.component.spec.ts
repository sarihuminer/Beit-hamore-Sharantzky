import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VRoutesComponent } from './v-routes.component';

describe('VRoutesComponent', () => {
  let component: VRoutesComponent;
  let fixture: ComponentFixture<VRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
