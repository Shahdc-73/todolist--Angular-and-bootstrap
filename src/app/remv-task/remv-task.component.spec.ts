import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemvTaskComponent } from './remv-task.component';

describe('RemvTaskComponent', () => {
  let component: RemvTaskComponent;
  let fixture: ComponentFixture<RemvTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemvTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemvTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
