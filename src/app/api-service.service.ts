/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  response: any;
  public REST_API_SERVER = 'https://creativelearning.net.in/wp-json/wp/v2/';
  public SERVER = 'https://creativelearning.net.in/';
  constructor(private httpClient: HttpClient) {

  }

  /* Report */
  public getReport(){
    return this.httpClient.get(this.REST_API_SERVER+'get_report_seniors');
  }

  /* Report */
  public getReportJuniors(){
    return this.httpClient.get(this.REST_API_SERVER+'get_report_juniors');
  }
  /* Home page */
  public getBanner(){
    return this.httpClient.get(this.REST_API_SERVER+'banners');
  }

  public getFeatures(id){
    return this.httpClient.get(this.REST_API_SERVER+'pages/'+id);
  }

  public getNotice(){
    return this.httpClient.get(this.REST_API_SERVER+'posts?per_page=1');
  }

  public getForms(){
    return this.httpClient.get(this.SERVER+'wp-json/acf/v3/options/options');
  }

  public getStars(){
    return this.httpClient.get(this.REST_API_SERVER+'stars');
  }


  /* About Us */
  public getAbout(){
    return this.httpClient.get(this.REST_API_SERVER+'pages/8?_embed');
  }

  /* Teachers */
  public getTeachers(){
    return this.httpClient.get(this.REST_API_SERVER+'teachers');
  }

  /* Students */
  public getAllStudents(keyword: string){
    //return this.httpClient.get(this.REST_API_SERVER+'searchstudents');

    const body = new HttpParams()
    .set('keyword', keyword);
    return this.httpClient.post(this.REST_API_SERVER+'searchstudents', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  /* Get subjects of downloads */
  public getSubjects(){
    return this.httpClient.get(this.REST_API_SERVER+'all-terms?term=subject');
  }

  /* Get all downloads */
  public getDownloads(slug){
    return this.httpClient.get(this.REST_API_SERVER+'all-downloads?slug='+slug);
  }

  /* Get all downloads */
  public getLink(id: string){
    return this.httpClient.get(this.REST_API_SERVER+'getlink?id='+id);
  }

  /* Get all classes */
  public getClasses(){
    return this.httpClient.get(this.REST_API_SERVER+'all-terms?term=class');
  }

  public getClassesatt(){
    return this.httpClient.get(this.REST_API_SERVER+'listatt');
  }

  /* GK WORLD */
  public getCountries(region){
    return this.httpClient.get('https://restcountries.com/v2/region/'+region);
  }

  public getSingleCountries(country){
      return this.httpClient.get(`https://restcountries.com/v2/name/${country}?fullText=true`);
  }

  public getStatesIndia(){
    return this.httpClient.get(`https://restindia.herokuapp.com/state/all`);
  }

  public getStatesCountry(country: string){
    const body = new HttpParams()
    .set('country', country);

    return this.httpClient.post('https://countriesnow.space/api/v0.1/countries/states', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

  }
    /* https://restcountries.com/v2/name/{name}?fullText=true */
  /* GK WORLD */
  /* Get all students by class */
  // public getStudents(slug){
  //   return this.httpClient.get(this.REST_API_SERVER+'all-students?slug='+slug);
  // }

  public getStudents(slug){
    const body = new HttpParams()
    .set('slug', slug);

    return this.httpClient.post(this.REST_API_SERVER+'allstudents', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

  }

  public getMonthlyStatus(slug){
    const body = new HttpParams()
    .set('class', slug);

    return this.httpClient.post(this.REST_API_SERVER+'stars_selection', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

  }



  /* Contact Us page */
  public getContact(){
    return this.httpClient.get(this.REST_API_SERVER+'pages/16?_embed');
  }

  public sendmail(name, email, mobile, message){
    //alert(1);
    const body = new HttpParams()
    .set('name', name)
    .set('email', email)
    .set('mobile', mobile)
    .set('message', message);

    return this.httpClient.post(this.REST_API_SERVER+'contact/sendmail', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  /* get all courses */
  public getCourses(){
    return this.httpClient.get(this.REST_API_SERVER+'courses');
  }

    /* get gallery images */
    public getImages(){
      return this.httpClient.get(this.REST_API_SERVER+'gallery-images');
    }

    /* get notice category */
    public getNoticeCat(){
      return this.httpClient.get(this.REST_API_SERVER+'categories?per_page=100');
    }

    /* get all notice by ID */
    public getAllNotice(id){
      return this.httpClient.get(this.REST_API_SERVER+'posts?categories='+id);
    }

    /* get all video topic */
    public getVideoTopic(){
      return this.httpClient.get(this.REST_API_SERVER+'video');
    }

    /* Get video */
    public getVideos(id){

      const body = new HttpParams()
      .set('id', id);

      return this.httpClient.post(this.REST_API_SERVER+'users/getvideos', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    }


    /* Get video */
    public sendattendance(ids, slug, date){

    const cartLoop = (httpBody, index, items) => {

        httpBody['student_id['+index+']'] = items;
        return httpBody;
    };

    let cartData = {
      teacher: localStorage.getItem('id'),
      class: slug,
      date,
    };

    for(let i=0; i<ids.length; i++)
    {
      //alert(ids[i]);
      const cartItems = ids[i];
      cartData = cartLoop(cartData, i, cartItems);
    }

    const body = new HttpParams({
      fromObject : cartData
    });

      return this.httpClient.post(this.REST_API_SERVER+'users/attendance', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    }

    /* Update fee status */
    public updatefee(ids, postid){

      const cartLoop = (httpBody, index, items) => {

          httpBody['row['+index+']'] = items;
          return httpBody;
      };

      let cartData = {
        postid,
        teacher: localStorage.getItem('id'),
      };

      for(let i=0; i<ids.length; i++)
      {
        //alert(ids[i]);
        const cartItems = ids[i];
        cartData = cartLoop(cartData, i, cartItems);
      }

      const body = new HttpParams({
        fromObject : cartData
      });

        return this.httpClient.post(this.REST_API_SERVER+'updatefee', body.toString(), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
      }

    public getUserMonthlyattendance(monthnum, uid){
      //alert(1);
      const body = new HttpParams()
      .set('uid', uid)
      .set('month', monthnum);

      return this.httpClient.post(this.REST_API_SERVER+'users/attendance_bymonth', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    }

  public sendphone(email, password){
    //alert(1);
    const body = new HttpParams()
    .set('username', email)
    .set('password', password);

    return this.httpClient.post(this.REST_API_SERVER+'users/login', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public uploadFile(title, subject, id,file){
    //console.log('API file', file);
    //const body = new HttpParams()

    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('file_upload', file, file.name);
    formData.append('file_title', title);
    formData.append('subject', subject);
    formData.append('uid', id);

    return this.httpClient.post(this.REST_API_SERVER+'users/upload', formData);
  }

  public uploadDP(id,file,uid){

    // Create form data
    const formData = new FormData();
    // Store form name as "file" with file data
    formData.append('file_upload', file, file.name);
    formData.append('pid', id);
    formData.append('uid', uid);

    return this.httpClient.post(this.REST_API_SERVER+'users/uploaddp', formData);
  }

  public register(data){

    const body = new HttpParams()
    .set('username', data.value.username)
    .set('email', data.value.email)
    .set('father', data.value.father)
    .set('mobile', data.value.mobile)
    .set('password', data.value.password)
    .set('class', data.value.class);

    return this.httpClient.post(this.REST_API_SERVER+'users/register', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public updateStudent(data, uid, pid){

    const body = new HttpParams()
    .set('username', data.value.username)
    .set('email', data.value.email)
    .set('father', data.value.father)
    .set('mobile', data.value.mobile)
    .set('password', data.value.password)
    .set('batch', data.value.batch)
    .set('class', data.value.class)
    .set('school', data.value.school)
    .set('dob', data.value.dob)
    .set('address', data.value.address)
    .set('fee', data.value.fee)
    .set('uid', uid)
    .set('pid', pid);

    return this.httpClient.post(this.REST_API_SERVER+'updatestudent', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public getUserDetails(uid){

    const body = new HttpParams()
    .set('uid', uid);

    return this.httpClient.post(this.REST_API_SERVER+'users/feerecord', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public getUserReport(pid){
    //alert(pid);
    const body = new HttpParams()
    .set('pid', pid);

    return this.httpClient.post(this.REST_API_SERVER+'users/test_report', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public getStudentFee(uid){

      const body = new HttpParams()
      .set('postid', uid);

      return this.httpClient.post(this.REST_API_SERVER+'feebypostid', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    }

  public getUserUpload(uid){

    //alert(uid);
    const body = new HttpParams()
    .set('uid', uid);

    return this.httpClient.post(this.REST_API_SERVER+'users/myupload', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  public addMarks(data, pid){
    const body = new HttpParams()
    .set('subject', data.value.subject)
    .set('date', data.value.date)
    .set('full_marks', data.value.full_marks)
    .set('marks_obtained', data.value.marks_obtained)
    .set('remarks', data.value.remarks)
    .set('result', data.value.result)
    .set('pid', pid);

    return this.httpClient.post(this.REST_API_SERVER+'add_marks', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

}

