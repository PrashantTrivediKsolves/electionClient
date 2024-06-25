import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingLandingPageComponent } from './voting-landing-page.component';

describe('VotingLandingPageComponent', () => {
  let component: VotingLandingPageComponent;
  let fixture: ComponentFixture<VotingLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
