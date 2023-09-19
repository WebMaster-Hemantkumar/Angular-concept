import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardngifComponent } from './standardngif.component';

describe('StandardngifComponent', () => {
  let component: StandardngifComponent;
  let fixture: ComponentFixture<StandardngifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardngifComponent]
    });
    fixture = TestBed.createComponent(StandardngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
