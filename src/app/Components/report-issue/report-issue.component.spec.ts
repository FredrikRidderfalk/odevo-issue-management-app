import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ReportIssueComponent } from './report-issue.component';

describe('ReportIssueComponent', () => {
  let component: ReportIssueComponent;
  let fixture: ComponentFixture<ReportIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the form on click', () => {
    expect(component.formVisible).toBeFalse();
    spyOn(component, 'toggleForm').and.callThrough();
    let btn = fixture.debugElement.nativeElement.querySelector('.report-issue-btn');
    btn.click()
    fixture.detectChanges();
    expect(component.toggleForm).toHaveBeenCalled();
    expect(component.formVisible).toBeTrue();
  });

  it("should render correct text", () => {
    expect(component.title).toBe("Issue Reporting")
    expect(component.subtitle).toBe("Create a ticket for an issue")
    expect(component.prompt).toBe("Fill in the details below")
    expect(component.report).toBe("Report Issue")
  })
  
});
