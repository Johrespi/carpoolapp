import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingLoginPage } from './landing-login.page';

describe('LandingLoginPage', () => {
  let component: LandingLoginPage;
  let fixture: ComponentFixture<LandingLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
