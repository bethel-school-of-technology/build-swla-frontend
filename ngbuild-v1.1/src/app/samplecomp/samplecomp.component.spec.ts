import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecompComponent } from './samplecomp.component';

describe('SamplecompComponent', () => {
  let component: SamplecompComponent;
  let fixture: ComponentFixture<SamplecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
