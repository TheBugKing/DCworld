import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAboutComponent } from './character-about.component';

describe('CharacterAboutComponent', () => {
  let component: CharacterAboutComponent;
  let fixture: ComponentFixture<CharacterAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
