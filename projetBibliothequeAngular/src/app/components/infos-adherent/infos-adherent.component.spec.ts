import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAdherentComponent } from './infos-adherent.component';

describe('InfosAdherentComponent', () => {
  let component: InfosAdherentComponent;
  let fixture: ComponentFixture<InfosAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosAdherentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
