import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListnamePage } from './listname.page';

describe('ListnamePage', () => {
  let component: ListnamePage;
  let fixture: ComponentFixture<ListnamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
