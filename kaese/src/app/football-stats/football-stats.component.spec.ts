import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballStatsComponent } from './football-stats.component';

describe('FootballStatsComponent', () => {
  let component: FootballStatsComponent;
  let fixture: ComponentFixture<FootballStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
