import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { AlertService } from 'src/app/alert.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html', 
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  uploads:any;
  id:any;
  files: any[]; 
  response:any;
  url: string = 'https://creativelearning.net.in/wp-json/wp/v2/'; 
  items: any = [];
  constructor(
    private alertService: AlertService,
    public http:HttpClient, 
    public dataService: ApiServiceService,
  ) { }

  ngOnInit() { 
    this.http.get(this.url+'all-terms?term=subject').subscribe(data=>{
      this.items=data;
     });

    //  this.http.get(this.url+'users/myupload').subscribe(data=>{
    //   this.uploads=data;
    //  });
    this.id = localStorage.getItem('id');
    this.dataService.getUserUpload(this.id).subscribe((data: any[])=>{
      this.uploads = data;
      //console.log(this.uploads);
    }); 
     
  }

  openLink(id){
    //alert(id);
    this.http.get(this.url+'getlink?id='+id).subscribe(data=>{
      this.items=data;
     });
     //alert(this.items);
     window.open(this.items);
  }

  loadImageFromDevice(event) {
 
    this.files = event.target.files[0];
    //console.log(this.files);
  
  };

  async login(form: NgForm) { 
    this.id = localStorage.getItem('id');
  
    this.dataService.uploadFile(form.value.title, form.value.subject, this.id, this.files).subscribe(
      (data: any[]) => {
        this.response = data;
        console.log('response', this.response);
        if(this.response.code=="success"){ 
          this.alertService.presentToast("Uploaded Successfully");
           setTimeout(function() {
            //this.router.navigate(['/dashboard']);
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.response.message);
        }
        
      },
    
    );
  }




}
