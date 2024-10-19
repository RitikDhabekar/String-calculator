import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should return 0 for an empty string',()=>{
    expect(component.add('')).toBe(0)
  })
  
  it('Should return 6 for input: "1,5"',()=>{
    expect(component.add("1,5")).toBe(6)
  })

  //Cases to confirm that add function handles any amount of numbers
    
  it('Should return 15 for input: "1,2,7,5"',()=>{
    expect(component.add("1,2,7,5")).toBe(15)
  })
    
  it('Should return 41 for input: "1,0,10,30"',()=>{
    expect(component.add("1,0,10,30")).toBe(41)
  })
});

