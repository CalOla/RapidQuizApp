import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateGroupComponent } from './create-group/create-group.component';

const routes: Routes = [
    { path: 'createQ', component: CreateQuizComponent },
    { path: 'takeQ', component: TakeQuizComponent },
    { path: 'userAcc', component: UserAccountComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'groupPage', component: CreateGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateQuizComponent,TakeQuizComponent,UserAccountComponent,NotificationsComponent, CreateGroupComponent]