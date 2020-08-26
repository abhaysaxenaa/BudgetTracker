import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaFormComponent } from './bulma-form.component';

describe('BulmaFormComponent', () => {
  let component: BulmaFormComponent;
  let fixture: ComponentFixture<BulmaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
