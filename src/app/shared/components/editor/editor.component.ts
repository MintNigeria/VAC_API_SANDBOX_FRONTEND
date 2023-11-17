import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor-v2';
@Component({
  selector: 'app-editor',
  standalone: false,
  // imports: [
  //   CommonModule,
  //   AngularEditorModule,
  //   HttpClientModule,
  //   MonacoEditorModule.forRoot(),
  //  ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @Input() code: string = `{
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "matriculationNumber": "string",
    "grade": "string",
    "degree": "string",
    "gender": "string",
    "faculty": "string",
    "department": "string",
    "yearOfGraduation": "string"
  }`;
  @Input() editorOptions: any
  @Output() editorPayload = new EventEmitter<any>()
//   code: string= `
// `;

  ngOnInit(): void {
  }
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };
  
  onInit(editor: any) {
    editor.onDidChangeModelContent((e: any) => {
      if (e.isFlush) {
        // this.editorPayload.emit(this.code)
        // true if setValue call
      } else {
        this.editorPayload.emit(this.code)
        // false if user input
      }
    });
    // getModel().modified.getValue()
  }
}
