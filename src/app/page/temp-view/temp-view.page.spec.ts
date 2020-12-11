import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempViewPage } from './temp-view.page';

describe('TempViewPage', () => {
  let component: TempViewPage;
  let fixture: ComponentFixture<TempViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
