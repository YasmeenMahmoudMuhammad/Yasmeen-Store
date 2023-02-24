import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  close() {
    document.getElementById('errorMsg')!.innerHTML = '';
    if (document.getElementsByClassName('error_toaster_show').length > 0)
      document.getElementsByClassName('error_toaster_show')[0].setAttribute('class', 'error_toaster');

    document.getElementById('successMsg')!.innerHTML = '';
    if (document.getElementsByClassName('success_toaster_show').length > 0)
      document.getElementsByClassName('success_toaster_show')[0].setAttribute('class', 'success_toaster');

    document.getElementById('warningMsg')!.innerHTML = '';
    if (document.getElementsByClassName('warning_toaster_show').length > 0)
      document.getElementsByClassName('warning_toaster_show')[0].setAttribute('class', 'warning_toaster');
  }
}
