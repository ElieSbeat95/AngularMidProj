import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCatComponent } from './men-cat.component';

describe('MenCatComponent', () => {
  let component: MenCatComponent;
  let fixture: ComponentFixture<MenCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenCatComponent]
    });
    fixture = TestBed.createComponent(MenCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
