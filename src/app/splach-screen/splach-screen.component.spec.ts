import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplachScreenComponent } from './splach-screen.component';

describe('SplachScreenComponent', () => {
  let component: SplachScreenComponent;
  let fixture: ComponentFixture<SplachScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplachScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplachScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
