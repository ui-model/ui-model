import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Metadata} from '../../utils/meta-data';

@Component({
  selector: 'app-brief-viewer',
  templateUrl: './brief-viewer.component.html',
  styleUrls: ['./brief-viewer.component.scss']
})
export class BriefViewerComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) {
  }

  sub: Subscription;
  meta: Metadata;

  ngOnInit() {
    this.sub = this.route.url.subscribe(() => {
      const primaryRoute = this.route.parent.children[0].children.find((value) => value.outlet === 'primary');
      this.meta = primaryRoute.snapshot.data as Metadata;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
