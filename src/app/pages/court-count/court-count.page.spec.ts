import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtCountPage } from './court-count.page';

describe('CourtCountPage', () => {
  let component: CourtCountPage;
  let fixture: ComponentFixture<CourtCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
