import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreateFormComponent } from './sale-create-form.component';

describe('SaleCreateFormComponent', () => {
  let component: SaleCreateFormComponent;
  let fixture: ComponentFixture<SaleCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
