import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    signUp: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      state: new FormControl(''),
      bio: new FormControl('')
    })
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
