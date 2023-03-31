import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listname',
  templateUrl: './listname.page.html',
  styleUrls: ['./listname.page.scss'],
})
export class ListnamePage implements OnInit {
  date: any = "";

  taskaItems = [
    { label: 'Ahmad Nuruddin', checked: false },
    { label: 'Muhammad Affan', checked: false },
    { label: 'Muhammad Zhian', checked: false },
    { label: 'Izz Aidan', checked: false },
    { label: 'Ayra Muneera', checked: false },
    { label: 'Ayra Delisha', checked: false },
    { label: 'Auni Maisara', checked: false },
    { label: 'Iris Humaira', checked: false },
    { label: 'Aisyah Aqilah', checked: false },
    { label: 'Nik Aleena', checked: false },
    { label: 'Nik Rania', checked: false },
    { label: 'Darwish', checked: false },
    { label: 'Hana Safiya', checked: false },
  ];

  tadikaItems = [
    { label: 'Harraz Izdiyad', checked: false },
    { label: 'Iman Nuha', checked: false },
    { label: 'Medina Sumaiyyah', checked: false },
    { label: 'Syifa Inara', checked: false },
  ];

  constructor(
    private actRoute: ActivatedRoute,
    private storage: AngularFireStorage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {
    this.date = this.actRoute.snapshot.paramMap.get("date");
  }

  ngOnInit() {
  }

  async submit() {
    console.log(this.taskaItems);
    console.log(this.tadikaItems);
    const taksaAttendance = {
      type: 'taska',
      date: this.date,
      attendancedata: this.taskaItems
    };
    const tadikaAttendance = {
      type: 'tadika',
      date: this.date,
      attendancedata: this.tadikaItems
    };
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
    (await loader).present();
    try {
      await this.firestore.collection("attendance").add(taksaAttendance);
      await this.firestore.collection("attendance").add(tadikaAttendance);

      this.showToast("Successfully saved");
      this.navCtrl.navigateRoot("submit"); 
    } catch (e: any) {
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
