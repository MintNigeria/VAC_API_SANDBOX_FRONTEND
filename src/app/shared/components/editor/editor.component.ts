import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    firstName: string
    lastName: string
    middleName: string
    address: string
    stateOfOrigin: string
    academicInformationVM: {
      programme: string
      faculty: string
      department: string
      matriculationNumber: string
      degree: string
      grade: string
      yearOfEntry: string
      yearOfGraduation: string
    }
    gender: string
    dateOfBirth: string
  }`;
  @Input() editorOptions: any
  @Output() editorPayload = new EventEmitter<any>()
//   code: string= `
// `;

  ngOnInit(): void {
  }
  
  onInit(editor: any) {
    editor.onDidChangeModelContent((e: any) => {
      if (e.isFlush) {
        this.editorPayload.emit(this.code)
        // true if setValue call
      } else {
        this.editorPayload.emit(this.code)
        // false if user input
      }
    });
    // getModel().modified.getValue()
  }
}
