import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifandelseComponent } from './ngifandelse.component';

describe('NgifandelseComponent', () => {
  let component: NgifandelseComponent;
  let fixture: ComponentFixture<NgifandelseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifandelseComponent]
    });
    fixture = TestBed.createComponent(NgifandelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
