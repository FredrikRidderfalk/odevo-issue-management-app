import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTasksComponent } from './resolved-tasks.component';

describe('ResolvedTasksComponent', () => {
  let component: ResolvedTasksComponent;
  let fixture: ComponentFixture<ResolvedTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
