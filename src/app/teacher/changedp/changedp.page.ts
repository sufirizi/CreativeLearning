import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { AlertService } from 'src/app/alert.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-changedp',
  templateUrl: './changedp.page.html',
  styleUrls: ['./changedp.page.scss'],
})
export class ChangedpPage implements OnInit {

  imageURL: string;
  uploads:any;
  id:any;
  files: any[]; 
  response:any;
  pid:any;
  url: string = 'https://creativelearning.net.in/wp-json/wp/v2/'; 
  items: any = [];
  constructor(
    private alertService: AlertService,
    public http:HttpClient, 
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute,
  ) { 
    this.pid = this.actRoute.snapshot.params.pid;
  }
 
  ngOnInit() { 
    //alert(this.pid);
    //  console.log(this.pid);
  }

  // openLink(id){
  //   //alert(id);
  //   this.http.get(this.url+'getlink?id='+id).subscribe(data=>{
  //     this.items=data;
  //    });
  //    //alert(this.items);
  //    window.open(this.items);
  // }

  loadImageFromDevice(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.files = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
    //console.log(file);
  
  };

  async login() { 
    this.id = localStorage.getItem('id');
    if(this.files==undefined || this.files==null){
      this.alertService.presentToast("Please select photo",);
        setTimeout(function() {
        //this.router.navigate(['/dashboard']);
      }.bind(this), 2000);
    } 
  
    this.dataService.uploadDP(this.pid, this.files, this.id).subscribe(
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
