import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerComponent } from './ruler.component';

describe('RulerComponent', () => {
  let component: RulerComponent;
  let fixture: ComponentFixture<RulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
