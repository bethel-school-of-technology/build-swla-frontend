import { Component, OnInit } from '@angular/core';
//angular guide
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
//angular guide
export class NameEditorComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}