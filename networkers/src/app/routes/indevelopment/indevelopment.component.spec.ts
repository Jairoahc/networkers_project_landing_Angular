import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndevelopmentComponent } from './indevelopment.component';

describe('IndevelopmentComponent', () => {
  let component: IndevelopmentComponent;
  let fixture: ComponentFixture<IndevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
