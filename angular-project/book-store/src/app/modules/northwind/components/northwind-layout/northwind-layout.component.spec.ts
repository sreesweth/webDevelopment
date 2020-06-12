import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthwindLayoutComponent } from './northwind-layout.component';

describe('NorthwindLayoutComponent', () => {
  let component: NorthwindLayoutComponent;
  let fixture: ComponentFixture<NorthwindLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwindLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthwindLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
