import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DordersComponent } from './dorders.component';

describe('DordersComponent', () => {
  let component: DordersComponent;
  let fixture: ComponentFixture<DordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
