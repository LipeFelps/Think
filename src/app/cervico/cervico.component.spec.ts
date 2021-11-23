import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervicoComponent } from './cervico.component';

describe('CervicoComponent', () => {
  let component: CervicoComponent;
  let fixture: ComponentFixture<CervicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
