import { EventData, Label, NavigatedData, Page } from '@nativescript/core'
import { MainViewModel } from './main-view-model'
import { MyData } from './MyData'

var page: Page
var vm: MainViewModel
var myData: MyData

vm = new MainViewModel()
page.bindingContext = vm

export function navigatingTo(args: NavigatedData) {

   page = <Page>args.object
   console.log(page.navigationContext)
   if(page.navigationContext?.data != undefined){
     myData = page.navigationContext.data
     console.log(myData)
   }

  if (myData?.numRequest === 'One') {
    vm.numOne = parseInt(myData.theNum)
  }
  if (myData?.numRequest === 'Two') {
    vm.numTwo = parseInt(myData.theNum)
  }
}
