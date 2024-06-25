import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteNowPageComponent } from './vote-now-page.component';

describe('VoteNowPageComponent', () => {
  let component: VoteNowPageComponent;
  let fixture: ComponentFixture<VoteNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteNowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
