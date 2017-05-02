import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoComponent } from './potato.component';

describe('PotatoComponent', () => {
  let component: PotatoComponent;
  let fixture: ComponentFixture<PotatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
