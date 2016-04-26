import {Page, ActionSheet, NavController, Alert} from 'ionic-angular';
import * as ionNative from 'ionic-native';

import {Badge} from 'ionic-native';

@Page({
	templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
	protected items: { title: string }[];
	icon: string = "ion-arrow-expand";

	constructor(public nav: NavController) {
		this.items = [{ "title": "t1" }, { "title": "t2" },];

		//3.badges

		Badge.set(10);
		Badge.increase(2);//增加
		Badge.decrease(1);//减少

		//Badge.get()  返回Promise
	}

	onHold() {
		//alert('your onHold me !');
		console.log("onHold mm");
	}
	onSwipeUp() {
		alert('onSwipeUp');
		this.icon = "ion-arrow-up-a";
		console.log("onSwipeUp mm");
	};
	onSwipeDown() {
		alert('onSwipeDown');
		this.icon = "ion-arrow-down-a";
		console.log("onSwipeDown mm");
	};
	onSwipeLeft() {
		alert('onSwipeLeft');
		this.icon = "ion-arrow-left-a";
		console.log("onSwipeLeft mm");
	};
	onSwipeRight() {
		alert('onSwipeRight');
		this.icon = "ion-arrow-right-a";
		console.log("onSwipeRight mm");
	};

	//1.actionSheets
	openMenu() {
		let actionSheet = ActionSheet.create({
			title: '标题',
			subTitle: '我是副标题',

			enableBackdropDismiss: true,//用户点击背景是否关闭ActionSheet
			buttons: [
				{
					text: '删除',
					icon: 'apps',
					handler: () => {
						alert('执行删除操作');
					}
				},
				{
					text: '恢复',
					handler: () => {
						alert('执行恢复操作');
					}
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked!');
					}
				},
				{
					text: 'delete',
					role: 'destructive',
					handler: () => {
						console.log('destructive');
					}
				}
			]
		})

		actionSheet.addButton({
			text: '我是新建出来的',
			handler: () => {
				console.log('i am is new button');
			}
		})

		this.nav.present(actionSheet);
	}

	//2.Alert
	presentAlert() {
		let alert = Alert.create({
			title: '低电量',
			subTitle: '10% of battery remaining',
			buttons: ['确定'],
			message: 'i am message!!!',
			enableBackdropDismiss: true

		});

		//a.checkbox 和textBox混用不了？
		alert.addInput({
			type: 'checkbox',
			label: '选择',
			value: 'ok',
			checked: true
		});


		// alert.addInput({
		// 	type: 'text'
		// });

		// alert.addInput({
		// 	type: 'text',
		// });


		alert.addButton({
			text: 'Okay',
			handler: data => {

			}
		});

		//b.如果三个按钮的话那么就是竖着排
		// alert.addButton({
		// 	text: 'Okay2',
		// 	handler: data => {
		// 	}
		// });

		this.nav.present(alert);
	}

	SayHi() {
		alert("hi");
	}

	//4.Buttons


	//读取联系人信息
	myList: Promise<any>;
    p2: any[] = [{ displayName: "c.displayName", phone: 123 }];

    findContact() {
        try {

			var p1 = ionNative.Contacts.create({
                'displayName': 'Test User'
            });


            ionNative.Contacts.find(['displayName'], { 'displayName': '林' }).then((cons: Array<typeof p1>) => {
                //console.log("json" + JSON.stringify(cons));
                this.p2 = cons.map(c => ({ displayName: c.displayName, phone: c.phoneNumbers }));
            });
        }
        catch (ex) {
            alert(ex);
        }
    }

    //保存联系人
	saveContact() {
        var p1 = ionNative.Contacts.create({
			'displayName': 'Test User'
		});

		p1.save();
	}
}