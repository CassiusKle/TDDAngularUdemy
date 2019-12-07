import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { By } from '@angular/platform-browser';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';
import { MockComponent } from 'ng-mocks';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListComponent,
      MockComponent(ShoppingListEditComponent) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have shoppingEditComponent', () => {
    const editComp = fixture.debugElement.query(By.directive(ShoppingListEditComponent));
    expect(editComp).not.toBeNull();
  });
});
