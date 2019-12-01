import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeListComponent } from './recipe-list.component';
import { By } from '@angular/platform-browser';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { MockComponent } from 'ng-mocks';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListComponent,
      MockComponent(RecipeItemComponent) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have recipe-item-component', () => {
    const itemComp = fixture.debugElement.query(By.directive(RecipeItemComponent));
    expect(itemComp).not.toBeNull();
  });
});
