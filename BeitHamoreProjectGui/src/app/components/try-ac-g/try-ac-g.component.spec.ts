import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryAcGComponent } from './try-ac-g.component';

describe('TryAcGComponent', () => {
  let component: TryAcGComponent;
  let fixture: ComponentFixture<TryAcGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryAcGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryAcGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
