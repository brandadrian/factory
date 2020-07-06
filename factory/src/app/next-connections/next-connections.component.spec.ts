import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextConnectionsComponent } from './next-connections.component';

describe('NextConnectionsComponent', () => {
  let component: NextConnectionsComponent;
  let fixture: ComponentFixture<NextConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
