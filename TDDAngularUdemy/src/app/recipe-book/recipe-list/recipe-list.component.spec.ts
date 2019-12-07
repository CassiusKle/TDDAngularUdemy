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

  it('should have recipe array with one recipe', () => {
    expect(component.recipes.length).toEqual(1);
  });

  it('should have button success', () => {
    const buttonSuccess = fixture.debugElement.query(By.css('button'));
    expect(buttonSuccess.nativeElement.innerText).toEqual('New Recipe');
  });

  it('should have an Item with an anker, heading, description and an image', () => {
    const item = fixture.debugElement.query(By.css('a'));
    const name = item.query(By.css('h4'));
    const desc = item.query(By.css('p'));
    const img = item.query(By.css('img'));

    expect(name.nativeElement.innerText).toEqual('Recipe Name');
    expect(desc.nativeElement.innerText).toEqual('Description');
    expect(getComputedStyle(img.nativeElement).maxHeight).toEqual('50px');
  });
});
