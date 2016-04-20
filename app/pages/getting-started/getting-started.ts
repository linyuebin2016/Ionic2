import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  protected items: { title: string }[];
  icon:string="ion-arrow-expand";
  constructor() {
    this.items = [{ "title": "t1" }, { "title": "t2" },];
  }
  
  onHold(){
    alert('your onHold me !');
  }
  onSwipeUp(){
    alert('onSwipeUp');
		this.icon="ion-arrow-up-a";
	};
	onSwipeDown() {
     alert('onSwipeDown');
		this.icon="ion-arrow-down-a";
	};
	onSwipeLeft() {
     alert('onSwipeLeft');
		this.icon="ion-arrow-left-a";
	};
	onSwipeRight() {
     alert('onSwipeRight');
		this.icon="ion-arrow-right-a";
	};
  
}
