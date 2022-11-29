import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsNetComponent } from './que-es-net.component';

describe('QueEsNetComponent', () => {
  let component: QueEsNetComponent;
  let fixture: ComponentFixture<QueEsNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueEsNetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
