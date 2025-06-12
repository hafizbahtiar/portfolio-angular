import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Load HomeComponent at the root path
    { path: '**', redirectTo: '' } // Redirect any unmatched paths to the home page
];