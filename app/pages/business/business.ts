/**
 * Created by linyuebin on 2016/4/15.
 */
import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/business/business.html'
})
export class BusinessPage {
 searchQuery: string = '';
  items: string[];

  constructor(public nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      '中华人民共和国中央人民远光软件信息管理委员会中央发展开发小小小小小组',
      '榆中县城农电公司',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Washington'
    ];
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  //初始化数据
  doInfinite(infiniteScroll) {

    setTimeout(() => {
      for (var i = 0; i < 500; i++) {
        this.items.push('榆中县城农电公司' + i);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  //下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.items = [
        '数据更新了请注意',
        '数据更新了榆中县城农电公司',
        '数据更新了Aires',
        '数据更新了Cairo',
        '数据更新了Dhaka',
        '数据更新了Edinburgh',
        '数据更新了Geneva',
        '数据更新了Genoa',
        '数据更新了Glasglow',
        '数据更新了Hanoi',
        '数据更新了Hong Kong',
        '数据更新了Islamabad',
        '数据更新了Istanbul',
        '数据更新了Jakarta',
        '数据更新了Kiel',
        '数据更新了Kyoto',
        '数据更新了Le Havre',
        '数据更新了Lebanon',
        '数据更新了Lhasa',
        '数据更新了Washington'
      ];
      refresher.complete();
    }, 2000);
  }

  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }
}

@Page({
  templateUrl: 'build/pages/customer/info.html'
})

class NavigationDetailsPage {
  name: string;
  options: Object;
  constructor(params: NavParams) {
    this.name = params.get('item');
    this.options = [
      { name: '立项', value: 1 },
      { name: '技术交流', value: 2 },
      { name: '方案确认', value: 3 },
      { name: '招投标', value: 4 },
      { name: '商务', value: 5 },
      { name: '合同', value: 6 },
      { name: '验收', value: 7 },
      { name: '实施', value: 8 },
    ];
  }

}
 