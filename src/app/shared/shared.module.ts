import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { EditorComponent } from './components/editor/editor.component';

const components: any[] = [
EditorComponent
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
   
  ],
  exports: [
    ...components

  ]
})
export class SharedModule { }
