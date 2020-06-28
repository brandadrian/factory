import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomationComponent } from './home-automation.component';

describe('HomeAutomationComponent', () => {
  let component: HomeAutomationComponent;
  let fixture: ComponentFixture<HomeAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
