import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFinanceiroConquistaComponent } from './aba-financeiro-conquista.component';

describe('AbaFinanceiroConquistaComponent', () => {
  let component: AbaFinanceiroConquistaComponent;
  let fixture: ComponentFixture<AbaFinanceiroConquistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFinanceiroConquistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFinanceiroConquistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
