import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteparameterComponent } from './routeparameter.component';

describe('RouteparameterComponent', () => {
  let component: RouteparameterComponent;
  let fixture: ComponentFixture<RouteparameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteparameterComponent]
    });
    fixture = TestBed.createComponent(RouteparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
