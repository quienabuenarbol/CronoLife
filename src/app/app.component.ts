import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, List, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { ListPage } from '../pages/list/list';

import { SplashPage } from '../pages/splash/splash'
import { StatsActividadesPage } from '../pages/stats-actividades/stats-actividades';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;
  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private translateService: TranslateService,
              private modalCtrl: ModalController) {
    this.initializeApp();

    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'List', component: ListPage },
      { title: 'Estadísticas por actividad', component: StatsActividadesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // Remove the automatically generated call to hide the splash screen
      this.splashScreen.hide();
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
