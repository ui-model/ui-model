import {Component} from '@angular/core';

@Component({
  selector: 'app-inplace-editor',
  templateUrl: './inplace-editor.component.html',
  styleUrls: ['./inplace-editor.component.scss']
})
export class InplaceEditorComponent {
  editorValue = 'Click to edit & press enter to submit';
}
