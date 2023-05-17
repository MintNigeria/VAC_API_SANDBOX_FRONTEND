import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, AngularEditorModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() control: FormControl = new FormControl()

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '80px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'}
    ]
  }
  ngOnInit(): void {
  }

}
