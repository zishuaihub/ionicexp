import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public actionSheetController:ActionSheetController,
              public alertControl:AlertController) {

  }
        presentActionSheet(){
          let actionSheet=this.actionSheetController.create({
            title:'分享到',
            buttons:[
              {
                text:'Destructive',
                role:'destructive',
                handler:()=>{
                  console.log('Destructuve clicked')
                }
              },
              {
                text:'Aechvie',
                handler:()=>{
                  console.log('Archive cliked')
                }
              },{
              text:'Cancel',
                role:'cancel',
                handler:()=>{
                  console.log('cancel cliked');
                }
              }

            ]
          });
          actionSheet.present();
        }

        basicAlert(){
          let basicalert=this.alertControl.create({
            title:'恭喜你答对了',
            subTitle:'亦爱亦恨 似笼牢被困，要放弃你或是接受命运',
            message:'出自我恨我痴心',
            buttons:['ok']
          });
          basicalert.present();
        }

        showPrompt(){
          let prompt=this.alertControl.create({
            title:'看词识曲',
            message:'请问歌词：是冰冻的时分，已过零时的夜晚。出自那首歌曲？',
            inputs:[
              {
                name:'song',
                placeholder:'请输入歌曲名'
              }
            ],
            buttons:[
              {
                text:'确定',
                handler:(data)=>{
                  if (data.song=='都是夜归人'){
                    this.basicAlert();
                  }else {
                    alert('答错了');
                  }

                }
              },{
              text:'取消',
                role:'cancel',
                handler:()=>console.log('你放弃了回答')
              }
            ]
          });
          prompt.present();
        }

        showRadio(){
          let showradio=this.alertControl.create();
          showradio.setTitle('Lightsaber color');
          showradio.addInput({
            type:'radio',
            label:'blue',
            value:'blue',
            checked:false
          });
          showradio.addInput({
            type:'radio',
            label:'red',
            value:'red',
            checked:true
          });
          showradio.addInput({
            type:'radio',
            label:'yellow',
            value:'yellow',
            checked:false
          });
          showradio.present();
        };


}
