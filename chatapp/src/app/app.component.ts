import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: FirebaseListObservable<any[]>;
  msg: string = '';
  editMsg: boolean = false;
  editId: number;

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/messages');
  }

  send(chatMsg: string) {
    this.items.push({ message: chatMsg });
    this.msg = '';
  }

  delete(key:string) {
    this.items.remove(key);
  }

  edit(key:string, message: string) {
    this.items.update(key, { message: message });
    this.editMsg = false;
  }
}
