import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {By} from '@angular/platform-browser';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RecipeBookComponent,
        ShoppingListComponent,
        RecipeListComponent,
        RecipeDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a header-component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const headerComp = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(headerComp).not.toBeNull();
  });

  it('should have a recipe-book-component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const recipeComp = fixture.debugElement.query(By.directive(RecipeBookComponent));
    expect(recipeComp).not.toBeNull();
  });

  it('should have a shopping-list-component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const shoppingComp = fixture.debugElement.query(By.directive(ShoppingListComponent));
    expect(shoppingComp).not.toBeNull();
  });

});
