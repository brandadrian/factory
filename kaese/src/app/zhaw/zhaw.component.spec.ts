import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhawComponent } from './zhaw.component';

describe('ZhawComponent', () => {
  let component: ZhawComponent;
  let fixture: ComponentFixture<ZhawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
