import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizViewComponent } from './admin-quiz-view.component';

describe('AdminQuizViewComponent', () => {
  let component: AdminQuizViewComponent;
  let fixture: ComponentFixture<AdminQuizViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuizViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
