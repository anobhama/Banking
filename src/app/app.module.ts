import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { OnlineAccountApplicationComponent } from './online-account-application/online-account-application.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetUserIdComponent } from './forget-user-id/forget-user-id.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ChangeUserOrPasswordComponent } from './change-user-or-password/change-user-or-password.component';
import { TPinResetComponent } from './tpin-reset/tpin-reset.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { IMPSPaymentComponent } from './imps-payment/imps-payment.component';
import { NEFTPaymentComponent } from './neft-payment/neft-payment.component';
import { RTGSPaymentComponent } from './rtgs-payment/rtgs-payment.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { SessionExpirationComponent } from './session-expiration/session-expiration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterationComponent,
    OnlineAccountApplicationComponent,
    ForgetPasswordComponent,
    ForgetUserIdComponent,
    PasswordResetComponent,
    DashboardComponent,
    AccountStatementComponent,
    ChangeUserOrPasswordComponent,
    TPinResetComponent,
    BeneficiaryDetailsComponent,
    IMPSPaymentComponent,
    NEFTPaymentComponent,
    RTGSPaymentComponent,
    TransactionStatusComponent,
    SessionExpirationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
