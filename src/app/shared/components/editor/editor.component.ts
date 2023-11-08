import { Component, Input, OnInit } from '@angular/core';
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
  editorOptions = {theme: 'vs-white', minimap: { enabled: false }, automaticLayout: true , language: 'javascript', readOnly: true};
//   code: string= `
// `;

  ngOnInit(): void {}
}
