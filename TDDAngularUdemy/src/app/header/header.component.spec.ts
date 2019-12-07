import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nav element', () => {
    const navElm = fixture.debugElement.query(By.css('nav'));
    expect(navElm).not.toBeNull();
  });

  it('should have a .navbar-header with a link', () => {
    const navHeader = fixture.debugElement.query(By.css('.navbar-header'));
    const headerLink = navHeader.query(By.css('a'));
    expect(headerLink.nativeElement.innerText).toEqual('Recipe Book');
  });

  it('should have collapse with two elements', () => {
    const firstList = fixture.debugElement.query(By.css('ul'));
    const listItems = firstList.queryAll(By.css('li'));
    expect(listItems.length).toEqual(2);
    expect(listItems[0].nativeElement.innerText).toEqual('Recipes');
    expect(listItems[1].nativeElement.innerText).toEqual('Shopping List');
  });

  it('should have dropdown with two entries', () => {
    const secondList = fixture.debugElement.queryAll(By.css('ul'))[1];
    const href = secondList.query(By.css('a'));
    const listItems = secondList.queryAll(By.css('li'));
    expect(href.attributes.href).toEqual('#');
    expect(href.nativeElement.innerText).toEqual('Manage');
    expect(listItems[1].nativeElement.innerText).toEqual('Save Data');
    expect(listItems[2].nativeElement.innerText).toEqual('Fetch Data');
  });


});
