import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitoDetallePage } from './habito-detalle.page';

describe('HabitoDetallePage', () => {
  let component: HabitoDetallePage;
  let fixture: ComponentFixture<HabitoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
