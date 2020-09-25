import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalsComponent } from './bridals.component';

describe('BridalsComponent', () => {
  let component: BridalsComponent;
  let fixture: ComponentFixture<BridalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
