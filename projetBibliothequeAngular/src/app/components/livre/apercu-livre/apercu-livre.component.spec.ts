import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuLivreComponent } from './apercu-livre.component';

describe('ApercuLivreComponent', () => {
  let component: ApercuLivreComponent;
  let fixture: ComponentFixture<ApercuLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApercuLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApercuLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
