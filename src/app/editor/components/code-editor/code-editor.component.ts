import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {
  name = 'Angular 6';
  @ViewChild('editor', {static: false}) editor;

  ngAfterViewInit() {

    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.editor.mode = 'javascript';
    this.editor.value = `function testThis() {
    console.log("it's working!")
    }`;

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: (editor) => {

      }
    });
  }

  getValue() {
    console.log(this.editor.value);
  }
}
