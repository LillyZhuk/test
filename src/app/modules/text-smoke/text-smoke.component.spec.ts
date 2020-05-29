import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSmokeComponent } from './text-smoke.component';

describe('TextSmokeComponent', () => {
  let component: TextSmokeComponent;
  let fixture: ComponentFixture<TextSmokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSmokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSmokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
