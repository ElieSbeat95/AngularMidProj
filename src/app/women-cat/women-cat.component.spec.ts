import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCatComponent } from './women-cat.component';

describe('WomenCatComponent', () => {
  let component: WomenCatComponent;
  let fixture: ComponentFixture<WomenCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenCatComponent]
    });
    fixture = TestBed.createComponent(WomenCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
