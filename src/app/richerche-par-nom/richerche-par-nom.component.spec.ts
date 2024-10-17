import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichercheParNomComponent } from './richerche-par-nom.component';

describe('RichercheParNomComponent', () => {
  let component: RichercheParNomComponent;
  let fixture: ComponentFixture<RichercheParNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RichercheParNomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichercheParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
