import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { NotificationdetailsComponent } from './notificationdetails/notificationdetails.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';
import { LoginComponent } from './login/login.component';
import { AdminQuizViewComponent } from './admin-quiz-view/admin-quiz-view.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'refreshComponent', component: RefreshComponent },
    { path: 'login', component: LoginComponent },
    { path: 'adminLogin', component: AdminLoginComponent },
    { path: 'createQ', component: CreateQuizComponent },
    { path: 'takeQ', component: TakeQuizComponent },
    { path: 'userAcc', component: UserAccountComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'groupPage', component: CreateGroupComponent },
    { path: 'notifications/:id', component: NotificationdetailsComponent },
    { path: 'quizPage/:id', component: QuizViewComponent},
    { path: 'adminQuizView', component: AdminQuizViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CreateQuizComponent,
  TakeQuizComponent,
  UserAccountComponent,
  NotificationsComponent, 
  CreateGroupComponent, 
  NotificationdetailsComponent, 
  QuizViewComponent,
  LoginComponent,
  AdminQuizViewComponent,
  RefreshComponent,
  AdminLoginComponent
]