import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearResltsComponent } from './sear-reslts.component';

describe('SearResltsComponent', () => {
  let component: SearResltsComponent;
  let fixture: ComponentFixture<SearResltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearResltsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearResltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
