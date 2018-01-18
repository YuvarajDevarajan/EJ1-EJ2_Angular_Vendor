import { Routes } from '@angular/router';
import { ReportViewerComponent } from './reportviewer/reportviewer.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  
	 { path: 'reportviewer', component: ReportViewerComponent }
];
