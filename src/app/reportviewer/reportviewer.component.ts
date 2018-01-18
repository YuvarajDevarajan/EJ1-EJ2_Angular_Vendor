import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './reportviewer.component.html',
    styleUrls: ['./reportviewer.component.css']
	
})
export class ReportViewerComponent {		
    public serviceUrl: string;    
    public reportPath: string;
	public serverUrl: string;	
	public parameters: any;
	public reportData: any;
	public toolbarSettings: any;
     public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];  
  
    public title = 'Average Sales Comparison';

    constructor() {       
	   this.serviceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';        
        
           this.reportPath = 'GroupingAgg.rdl'; 
    }	
	reportError(event){         
        alert("Triggers after the suggestion list is opened.");         
        } 	
}



