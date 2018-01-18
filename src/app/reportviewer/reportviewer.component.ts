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
	   this.serviceUrl = 'http://localhost:57658/api/ReportApi';        
        this.reportPath = 'Company Sales.rdl'; 
		this.parameters = [{
			name: 'ReportParameter', 
			labels: ['Sample Data'], 
			values: ['Sample Data'], 
			nullable: false 
			}];
	    this.toolbarSettings = {
               items: ~ej.ReportViewer.ToolbarItems.Parameters
        }; 
    }	
	

	onAjaxBeforeLoad(args){            		           
           				
            args.headerReq.push({    //Pass the header value
                Key: "Authorization",
                Value: "MyToken"
            }); 			             
        }			
}



