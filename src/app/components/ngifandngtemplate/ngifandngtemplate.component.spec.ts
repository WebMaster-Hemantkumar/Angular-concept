import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifandngtemplateComponent } from './ngifandngtemplate.component';

describe('NgifandngtemplateComponent', () => {
  let component: NgifandngtemplateComponent;
  let fixture: ComponentFixture<NgifandngtemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifandngtemplateComponent]
    });
    fixture = TestBed.createComponent(NgifandngtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
