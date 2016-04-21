import 'es6-shim';
import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage,NavController} from './pages/getting-started/getting-started';

import {ListPage} from './pages/list/list';
import {HomePage} from './pages/home/home';
import {BasicPage} from './pages/modals/basic/pages';

//所有控件
import * as actionSheets from './pages/action-sheets/action-sheets';
import * as alerts from './pages/alerts/alerts';
import * as badges from './pages/badges/badges';
import * as buttons from './pages/buttons/buttons';
import * as cards from './pages/cards/cards';
import * as checkboxes from './pages/checkboxes/checkboxes';
import * as grid from './pages/grid/grid';
import * as icons from './pages/icons/icons';
import * as inputs from './pages/inputs/inputs';
import * as lists from './pages/lists/lists';
import * as menus from './pages/menus/menus';
import * as modals from './pages/modals/modals';
import * as navigation from './pages/navigation/navigation';
import * as radios from './pages/radios/radios';
import * as ranges from './pages/ranges/ranges';
import * as searchbars from './pages/searchbars/searchbars';
import * as segments from './pages/segments/segments';
import * as selects from './pages/selects/selects';
import * as slides from './pages/slides/slides';
import * as tabs from './pages/tabs/tabs';
import * as toggles from './pages/toggles/toggles';
import * as toolbar from './pages/toolbar/toolbar';

import * as customer from './pages/customer/customer'
import * as business from './pages/business/business'

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

class MyApp {
  rootPage: any;
  pages: Array<{ title: string, component: any }>;

  constructor(
    private app: IonicApp,
    private platform: Platform
    //private nav:NavController
  ) {
   // this.nav=nav;
    this.rootPage = GettingStartedPage;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '客户管理', component: customer.CustomerPage },
      { title: '商机管理', component: business.BusinessPage },
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'List', component: ListPage },
      { title: 'home', component: HomePage },
      { title: 'Modal', component: BasicPage },
      //所有控件菜单
      { title: '/action-sheets/basic', component: actionSheets.BasicPage },
      { title: '/alerts/basic', component: alerts.BasicPage },
      { title: '/alerts/checkbox', component: alerts.CheckboxPage },
      { title: '/alerts/confirm', component: alerts.ConfirmPage },
      { title: '/alerts/prompt', component: alerts.PromptPage },
      { title: '/alerts/radio', component: alerts.RadioPage },
      { title: '/badges/basic', component: badges.BasicPage },
      { title: '/buttons/basic', component: buttons.BasicPage },
      { title: '/badges/basic', component: badges.BasicPage },
      { title: '/buttons/block', component: buttons.BlockPage },
      { title: '/buttons/clear', component: buttons.ClearPage },
      { title: '/buttons/components', component: buttons.ComponentsPage },
      { title: '/buttons/fab', component: buttons.FabPage },
      { title: '/buttons/full', component: buttons.FullPage },
      { title: '/buttons/icons', component: buttons.IconsPage },
      { title: '/buttons/outline', component: buttons.OutlinePage },
      { title: '/buttons/round', component: buttons.RoundPage },
      { title: '/buttons/sizes', component: buttons.SizesPage },
      { title: '/cards/advanced-map', component: cards.AdvancedMapPage },
      { title: '/cards/advanced-social', component: cards.AdvancedSocialPage },
      { title: '/cards/advanced-weather', component: cards.AdvancedWeatherPage },
      { title: '/cards/background', component: cards.BackgroundPage },
      { title: '/cards/basic', component: cards.BasicPage },
      { title: '/cards/header', component: cards.HeaderPage },
      { title: '/cards/image', component: cards.ImagePage },
      { title: '/cards/list', component: cards.ListPage },
      { title: '/checkboxes/basic', component: checkboxes.BasicPage },
      { title: '/grid/basic', component: grid.BasicPage },
      { title: '/icons/basic', component: icons.BasicPage },
      { title: '/inputs/basic', component: inputs.BasicPage },
      { title: '/inputs/fixed-inline', component: inputs.FixedInlinePage },
      { title: '/inputs/floating', component: inputs.FloatingPage },
      { title: '/inputs/inline', component: inputs.InlinePage },
      { title: '/inputs/inset', component: inputs.InsetPage },
      { title: '/inputs/placeholder', component: inputs.PlaceholderPage },
      { title: '/inputs/stacked', component: inputs.StackedPage },
      { title: '/lists/avatar', component: lists.AvatarPage },
      { title: '/lists/basic', component: lists.BasicPage },
      { title: '/lists/dividers', component: lists.DividersPage },
      { title: '/lists/headers', component: lists.HeadersPage },
      { title: '/lists/icon', component: lists.IconPage },
      { title: '/lists/inset', component: lists.InsetPage },
      { title: '/lists/multiline', component: lists.MultilinePage },
      { title: '/lists/no-lines', component: lists.NoLinesPage },
      { title: '/lists/sliding', component: lists.SlidingPage },
      { title: '/lists/thumbnail', component: lists.ThumbnailPage },
      { title: '/menus/basic', component: menus.BasicPage },
      { title: '/modals/basic', component: modals.BasicPage },
      { title: '/navigation/basic', component: navigation.BasicPage },
      { title: '/radios/basic', component: radios.BasicPage },
      { title: '/ranges/basic', component: ranges.BasicPage },
      { title: '/searchbars/basic', component: searchbars.BasicPage },
      { title: '/segments/basic', component: segments.BasicPage },
      { title: '/selects/basic', component: selects.BasicPage },
      { title: '/slides/basic', component: slides.BasicPage },
      { title: '/tabs/badges', component: tabs.BadgesPage },
      { title: '/tabs/basic', component: tabs.BasicPage },
      { title: '/tabs/icon', component: tabs.IconPage },
      { title: '/tabs/icon-text', component: tabs.IconTextPage },
      { title: '/toggles/basic', component: toggles.BasicPage },
      { title: '/toolbar/basic', component: toolbar.BasicPage },
      { title: '/toolbar/buttons', component: toolbar.ButtonsPage },
      { title: '/toolbar/searchbar', component: toolbar.SearchbarPage },
      { title: '/toolbar/segment', component: toolbar.SegmentPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }

  goCustomer() {
    let nav = this.app.getComponent('nav');
    nav.setRoot(customer.CustomerPage);
  }

  goBusiness() {
    let nav = this.app.getComponent('nav');
    nav.setRoot(business.BusinessPage);
  }
  
 
}