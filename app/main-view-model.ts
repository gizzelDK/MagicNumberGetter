import { EventData, Observable, Frame } from '@nativescript/core'
import { MyData } from './MyData';

export class MainViewModel extends Observable {

private _numOne : number;
public get numOne() : number {
  return this._numOne;
}
public set numOne(v : number) {
  this._numOne = v;
  this.notifyPropertyChange('numOne', v)
}


private _numTwo : number;
public get numTwo() : number {
  return this._numTwo;
}
public set numTwo(v : number) {
  this._numTwo = v;
  this.notifyPropertyChange('numTwo', v)
}


private _resultat : number;
public get resultat() : number {
  return this._resultat;
}
public set resultat(v : number) {
  this._resultat = v;
  this.notifyPropertyChange('resultat', v)
}


private _md : MyData;
public get md() : MyData {
  return this._md;
}
public set md(v : MyData) {
  this._md = v;
}

  constructor() {
    super()
    this.md  = new MyData()
    // Initialize default values.
    this.numOne= 0
    this.numTwo= 0
    this.resultat= 0
  }

  goGetNumOne(requestedNum: string){
      this.md.numRequest = requestedNum
      var navigationOptions ={
        moduleName: 'getnum/get-num',
        context:{
          data: this._md
        }
      }
      Frame.topmost().navigate(navigationOptions)
  }
  add() {
    this.resultat = this.numOne + this.numTwo
  }
  sub(){
    this.resultat = this.numOne - this.numTwo
  }
  mul(){
    this.resultat = this.numOne * this.numTwo
  }
  div(){
    if (this.numOne !=0 && this.numTwo !=0) {
      this.resultat = this.numOne / this.numTwo
    }else{
      this.resultat = 0
    }
  }
}
