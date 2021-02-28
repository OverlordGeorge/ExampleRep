import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatComponentComponent } from './single-cat-component.component';

describe('SingleCatComponentComponent', () => {
  let component: SingleCatComponentComponent;
  let fixture: ComponentFixture<SingleCatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
