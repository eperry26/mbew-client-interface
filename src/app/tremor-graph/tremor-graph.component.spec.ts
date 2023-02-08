import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TremorGraphComponent } from './tremor-graph.component';

describe('TremorGraphComponent', () => {
  let component: TremorGraphComponent;
  let fixture: ComponentFixture<TremorGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TremorGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TremorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
