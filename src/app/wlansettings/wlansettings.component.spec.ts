import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlansettingsComponent } from './wlansettings.component';

describe('WlansettingsComponent', () => {
  let component: WlansettingsComponent;
  let fixture: ComponentFixture<WlansettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlansettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlansettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
