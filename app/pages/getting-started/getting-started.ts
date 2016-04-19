import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
    protected  items :{title:string}[];
  constructor() {
this.items = [{"title":"t1"},{"title":"t2"},];
  }
}
