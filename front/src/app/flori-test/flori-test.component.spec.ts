import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloriTestComponent } from './flori-test.component';

describe('FloriTestComponent', () => {
  let component: FloriTestComponent;
  let fixture: ComponentFixture<FloriTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloriTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloriTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
