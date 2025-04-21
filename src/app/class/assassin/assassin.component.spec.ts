import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinComponent } from './assassin.component';

describe('AssassinComponent', () => {
  let component: AssassinComponent;
  let fixture: ComponentFixture<AssassinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssassinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
