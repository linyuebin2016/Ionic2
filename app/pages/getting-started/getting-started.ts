import {Page,ActionSheet,NavController,Alert} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  protected items: { title: string }[];
  icon:string="ion-arrow-expand";
  actionSheet;

  constructor(public nav:NavController) {
    this.items = [{ "title": "t1" }, { "title": "t2" },];
  }
  
  onHold(){
    //alert('your onHold me !');
    console.log("onHold mm");
  }
  onSwipeUp(){
    alert('onSwipeUp');
		this.icon="ion-arrow-up-a";
    console.log("onSwipeUp mm");
	};
	onSwipeDown() {
     alert('onSwipeDown');
		this.icon="ion-arrow-down-a";
    console.log("onSwipeDown mm");
	};
	onSwipeLeft() {
     alert('onSwipeLeft');
		this.icon="ion-arrow-left-a";
    console.log("onSwipeLeft mm");
	};
	onSwipeRight() {
     alert('onSwipeRight');
		this.icon="ion-arrow-right-a";
    console.log("onSwipeRight mm");
	};
  
  //actionSheets
  openMenu(){
    this.actionSheet=ActionSheet.create({
      title:'标题',
      buttons:[
        {
          text:'删除',
          handler:()=>{
            alert('执行删除操作');
          }
        },
        {
          text:'恢复',
             handler:()=>{
            alert('执行恢复操作');
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log('Cancel clicked!');
          }
        }
      ]
    })
    this.nav.present(this.actionSheet);
  }
  
  //Alert
  presentAlert(){
    let alert=Alert.create({
      title:'低电量',
      subTitle:'10% of battery remaining',
      buttons:['确定'],
      message:'i am message!!!',
      enableBackdropDismiss:true
      
    });
    
    alert.addInput({
      type:'checkbox',
      label:'选择',
      value:'ok',
      checked:true
    });
    
   alert.addButton({
      text: 'Okay',
      handler: data => {
        
      }
    });
    
    this.nav.present(alert);
  }
  
  SayHi(){
    alert("hi");
  }
 
  
}
