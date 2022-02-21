import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdoperationComponent } from './curdoperation.component';

describe('CurdoperationComponent', () => {
  let component: CurdoperationComponent;
  let fixture: ComponentFixture<CurdoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
