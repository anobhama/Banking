import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { ChangeUserOrPasswordComponent } from './change-user-or-password/change-user-or-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetUserIdComponent } from './forget-user-id/forget-user-id.component';
import { HomeComponent } from './home/home.component';
import { IMPSPaymentComponent } from './imps-payment/imps-payment.component';
import { LoginComponent } from './login/login.component';
import { NEFTPaymentComponent } from './neft-payment/neft-payment.component';
import { OnlineAccountApplicationComponent } from './online-account-application/online-account-application.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RTGSPaymentComponent } from './rtgs-payment/rtgs-payment.component';
import { SessionExpirationComponent } from './session-expiration/session-expiration.component';
import { TPinResetComponent } from './tpin-reset/tpin-reset.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterationComponent},
  {path:'onlineaccount',component:OnlineAccountApplicationComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'forgetUserId',component:ForgetUserIdComponent},
  {path:'passwordReset',component:PasswordResetComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'accountStatement',component:AccountStatementComponent},
  {path:'changeUserPassword',component:ChangeUserOrPasswordComponent},
  {path:'tPinReset',component:TPinResetComponent},
  {path:'beneficiaryDetails',component:BeneficiaryDetailsComponent},
  {path:'imps',component:IMPSPaymentComponent},
  {path:'neft',component:NEFTPaymentComponent},
  {path:'rtgs',component:RTGSPaymentComponent},
  {path:'transactionStatus',component:TransactionStatusComponent},
  {path:'sessionDetails',component:SessionExpirationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
