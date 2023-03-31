import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  date: any = "";

  constructor(private router: Router, private toastCtrl: ToastController) {
  }

  ngOnInit() {
  }
  checkDate() {
    if (this.date == "") {
      this.showToast("Please choose date");
      return;
    }
    this.router.navigate(['/listname', this.date])
  }
  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}

