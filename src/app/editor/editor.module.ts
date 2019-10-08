import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceEditorModule } from 'ng2-ace-editor';
import { EditorRoutingModule } from './editor-routing.module';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';


@NgModule({
  declarations: [CodeEditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    AceEditorModule,
  ]
})
export class EditorModule { }
