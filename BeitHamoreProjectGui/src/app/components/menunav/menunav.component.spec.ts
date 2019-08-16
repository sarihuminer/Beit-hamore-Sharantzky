import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunavComponent } from './menunav.component';

describe('MenunavComponent', () => {
  let component: MenunavComponent;
  let fixture: ComponentFixture<MenunavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenunavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenunavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
