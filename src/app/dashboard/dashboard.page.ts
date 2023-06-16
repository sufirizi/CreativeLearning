import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { of , Observable, Subject} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  isDarkMode = false;
  name:any = '';
  id:any = ''; 
  email:any = '';
  role:any = '';
  myuser:any;
  userDetails:any;
  pid:any;
  sresults:any;
  studentResult = true;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor(
    public router: Router, 
    private alertService: AlertService,
    public http:HttpClient,
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute
    ) { 

    if(localStorage.getItem('id')==null){
      this.router.navigate(['/login']);

    } 
  }

  ngOnInit() {

    if (localStorage.getItem('mode') == 'dark') {
      document.body.classList.toggle('dark', true);
      this.isDarkMode = true;
      this.changeStatusBar(true); 
    }
    
    this.name = ""; 
    this.id = "";
    this.email = "";
    this.role = ""; 
 
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
    this.email = localStorage.getItem('email');
    this.role = localStorage.getItem('role');
  
    if(localStorage.getItem('id')==""){ 
      this.router.navigate(['/login']);
    }
    //alert(1);

    //console.log('UserData', this.myuser.ID);
    this.simpleObservable.next(this.name);
    this.simpleObservable.next(this.id);
    this.simpleObservable.next(this.email);
    this.simpleObservable.next(this.role);
    this.dataService.getUserDetails(this.id).subscribe((data: any[])=>{
      
      this.userDetails=data;
      console.log('UserData', this.userDetails);
      this.pid = this.userDetails.pid;
      this.simpleObservable.next(this.userDetails);
      //alert(this.userDetails.pid);
      //console.log('UserData', this.userDetails);
    });  

  } 

  searchStudent(event:any){
    //console.log(event.detail.value);
    let keyword = event.detail.value;
    if(keyword.length>2){
      this.dataService.getAllStudents(keyword).subscribe((data: any[])=>{


        if(this.sresults?.data!=null){
          this.studentResult = true;
        }else{
          this.studentResult = false;
        }

        this.sresults=data;
        console.log('UserData', this.sresults);


        // this.pid = this.userDetails.pid;
        // this.simpleObservable.next(this.userDetails);
        //alert(this.userDetails.pid);
        //console.log('UserData', this.userDetails);
      });  
    }else{
      this.studentResult=false;
    }
  }

  logoutUser(){
    //alert(1);
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    this.alertService.presentToast("Logged out successfully!");
    this.router.navigate(['/']);
  }

  onDarkMode(event) {
    document.body.classList.toggle('dark', event.detail.checked);
    localStorage.setItem('mode', event.detail.checked ? 'dark':'light');
    this.changeStatusBar(event.detail.checked);
  }

  changeStatusBar(isStatusBarLight) {
    StatusBar.setStyle({
      style: isStatusBarLight ? Style.Dark : Style.Light
    });
  }

}
