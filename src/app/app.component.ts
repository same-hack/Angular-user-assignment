import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'selectUser';

  userList = [
    { id: 1, name: 'サメハック' },
    { id: 2, name: 'ねこハック' },
    { id: 3, name: 'いぬハック' },
  ];

  todoList = [
    { title: '事務所の片付け', userId: 1 },
    { title: '荷物の発送', userId: 2 },
    { title: '料金支払い', userId: 3 },
    { title: '経費精算', userId: '' },
  ];

  // ユーザIDを取得
  myFunc(event: any) {
    console.log('event', event);
  }
}
