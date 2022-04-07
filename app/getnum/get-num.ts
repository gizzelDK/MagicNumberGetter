import { EventData, Frame, Label, NavigatedData, Page, TextField } from '@nativescript/core'
import { MyData } from '../MyData' 

var page: Page
var tfGetNum: TextField
var myData: MyData
var lblGetNum: Label

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object
    lblGetNum = page.getViewById("lblGetNum")
      myData = page.navigationContext.data
  
      lblGetNum.text = 'Get ' + myData.numRequest
  }
  export function deliverNum(args: EventData){
    tfGetNum = page.getViewById('tfGetNum')
    myData.theNum = tfGetNum.text
    page.frame.goBack()
  }