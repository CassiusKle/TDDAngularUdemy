import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeBookComponent } from './recipe-book.component';
import { By } from '@angular/platform-browser';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MockComponent } from 'ng-mocks';

describe('RecipeBookComponent', () => {
  let component: RecipeBookComponent;
  let fixture: ComponentFixture<RecipeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBookComponent,
      MockComponent(RecipeListComponent),
      MockComponent(RecipeDetailComponent)
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two columns, list on the first detail on the second', () => {
    const firstColumn = fixture.debugElement.query(By.css('.col-md-5'));
    const recipeListComp = firstColumn.query(By.directive(RecipeListComponent));
    const secondColumn = fixture.debugElement.query(By.css('.col-md-7'));
    const recipeDetailComp = secondColumn.query(By.directive(RecipeDetailComponent));

    expect(firstColumn).not.toBeNull();
    expect(recipeListComp).not.toBeNull();
    expect(secondColumn).not.toBeNull();
    expect(recipeDetailComp).not.toBeNull();
  });
});
