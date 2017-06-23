import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BriefViewerComponent } from './brief-viewer.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MetadataService } from '../../../core/metadata.service';
import { By } from '@angular/platform-browser';

describe('BriefViewerComponent', () => {
  let component: BriefViewerComponent;
  let fixture: ComponentFixture<BriefViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BriefViewerComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        {
          provide: MetadataService,
          useValue: {
            description: 'Description',
            tags: ['a', 'b'],
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach((done) => {
    fixture = TestBed.createComponent(BriefViewerComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    fixture.whenStable().then(done);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has data', () => {
    const element = fixture.debugElement;
    expect(element.query(By.css('.alert')).nativeElement.textContent.trim()).toEqual('Description');
  });
});
