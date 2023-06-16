import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./pages/download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'downloadpost/:slug',
    loadChildren: () => import('./pages/downloadpost/downloadpost.module').then( m => m.DownloadpostPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./pages/notice/notice.module').then( m => m.NoticePageModule)
  },
  {
    path: 'singlenotice/:id',
    loadChildren: () => import('./pages/singlenotice/singlenotice.module').then( m => m.SinglenoticePageModule)
  },
  {
    path: 'students/:slug',
    loadChildren: () => import('./pages/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./pages/teachers/teachers.module').then( m => m.TeachersPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'feerecord/:id',
    loadChildren: () => import('./student/feerecord/feerecord.module').then( m => m.FeerecordPageModule)
  },
  {
    path: 'attendance/:id',
    loadChildren: () => import('./student/attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./pages/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'videotopics',
    loadChildren: () => import('./pages/videotopics/videotopics.module').then( m => m.VideotopicsPageModule)
  },
  {
    path: 'singlevideo/:id',
    loadChildren: () => import('./pages/singlevideo/singlevideo.module').then( m => m.SinglevideoPageModule)
  },
  {
    path: 'studentslist/:slug',
    loadChildren: () => import('./teacher/studentslist/studentslist.module').then( m => m.StudentslistPageModule)
  },
  {
    path: 'classlist',
    loadChildren: () => import('./teacher/classlist/classlist.module').then( m => m.ClasslistPageModule)
  },
  {
    path: 'monthlyattendance/:month/:uid',
    loadChildren: () => import('./student/monthlyattendance/monthlyattendance.module').then( m => m.MonthlyattendancePageModule)
  },
  {
    path: 'checkfee',
    loadChildren: () => import('./teacher/checkfee/checkfee.module').then( m => m.CheckfeePageModule)
  },
  {
    path: 'checkattendance',
    loadChildren: () => import('./teacher/checkattendance/checkattendance.module').then( m => m.CheckattendancePageModule)
  },
  {
    path: 'studentlistfee/:slug',
    loadChildren: () => import('./teacher/studentlistfee/studentlistfee.module').then( m => m.StudentlistfeePageModule)
  },
  {
    path: 'studentfeerecord/:id',
    loadChildren: () => import('./teacher/studentfeerecord/studentfeerecord.module').then( m => m.StudentfeerecordPageModule)
  },
  {
    path: 'studentlistatt/:slug',
    loadChildren: () => import('./teacher/studentlistatt/studentlistatt.module').then( m => m.StudentlistattPageModule)
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./teacher/addstudent/addstudent.module').then( m => m.AddstudentPageModule)
  },
  {
    path: 'editstudent/:uid/:pid',
    loadChildren: () => import('./teacher/editstudent/editstudent.module').then( m => m.EditstudentPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./teacher/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'testreport/:pid',
    loadChildren: () => import('./student/testreport/testreport.module').then( m => m.TestreportPageModule)
  },
  {
    path: 'listformarks',
    loadChildren: () => import('./teacher/listformarks/listformarks.module').then( m => m.ListformarksPageModule)
  },
  {
    path: 'addmarks/:slug',
    loadChildren: () => import('./teacher/addmarks/addmarks.module').then( m => m.AddmarksPageModule)
  },
  {
    path: 'marksform/:pid', 
    loadChildren: () => import('./teacher/marksform/marksform.module').then( m => m.MarksformPageModule)
  },
  {
    path: 'liststatus',
    loadChildren: () => import('./teacher/liststatus/liststatus.module').then( m => m.ListstatusPageModule)
  },
  {
    path: 'starstatus/:slug',
    loadChildren: () => import('./teacher/starstatus/starstatus.module').then( m => m.StarstatusPageModule)
  },
  {
    path: 'changedp/:pid',
    loadChildren: () => import('./teacher/changedp/changedp.module').then( m => m.ChangedpPageModule)
  },
  {
    path: 'gkworld',
    loadChildren: () => import('./pages/gkworld/gkworld.module').then( m => m.GkworldPageModule)
  },
  {
    path: 'countries/:region',
    loadChildren: () => import('./pages/countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'infomodal',
    loadChildren: () => import('./infomodal/infomodal.module').then( m => m.InfomodalPageModule)
  },
  {
    path: 'continents',
    loadChildren: () => import('./pages/continents/continents.module').then( m => m.ContinentsPageModule)
  },
  {
    path: 'states',
    loadChildren: () => import('./pages/states/states.module').then( m => m.StatesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
