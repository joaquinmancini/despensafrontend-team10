import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateFormComponent } from './client-create-form.component';

describe('ClientCreateFormComponent', () => {
  let component: ClientCreateFormComponent;
  let fixture: ComponentFixture<ClientCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
