import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraComponentComponent } from './camera-component.component';

describe('CameraComponentComponent', () => {
  let component: CameraComponentComponent;
  let fixture: ComponentFixture<CameraComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
