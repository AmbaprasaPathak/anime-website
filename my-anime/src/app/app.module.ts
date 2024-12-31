import { NgModule, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Add RouterModule here
    FormsModule, // Import FormsModule for ngModel
  ],
  providers: [
    makeEnvironmentProviders([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Initialize Firebase
      provideAuth(() => getAuth()), // Provide Firebase Auth
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
