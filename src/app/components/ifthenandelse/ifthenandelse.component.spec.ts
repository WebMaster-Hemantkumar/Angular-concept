import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfthenandelseComponent } from './ifthenandelse.component';

describe('IfthenandelseComponent', () => {
  let component: IfthenandelseComponent;
  let fixture: ComponentFixture<IfthenandelseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfthenandelseComponent]
    });
    fixture = TestBed.createComponent(IfthenandelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
