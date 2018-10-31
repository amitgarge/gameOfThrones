import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHomeComponent } from './got-home.component';

describe('GotHomeComponent', () => {
  let component: GotHomeComponent;
  let fixture: ComponentFixture<GotHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
