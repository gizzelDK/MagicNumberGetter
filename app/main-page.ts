import { EventData, Label, NavigatedData, Page } from '@nativescript/core'
import { MainViewModel } from './main-view-model'
import { MyData } from './MyData'

var page: Page
var vm: MainViewModel
var myData: MyData
export function navigatingTo(args: NavigatedData) {

   page = <Page>args.object
   if(page.navigationContext?.data != undefined){
     myData = page.navigationContext.data
   }

  if (!args.isBackNavigation) {
    vm = new MainViewModel()
    page.bindingContext = vm
  }
  if (myData?.numRequest === 'One') {
    vm.numOne = parseInt(myData.theNum)
  }
  if (myData?.numRequest === 'Two') {
    vm.numTwo = parseInt(myData.theNum)
  }
}
