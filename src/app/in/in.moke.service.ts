import{Injectable} from '@angular/core';
import{In} from '../shared/in';
@Injectable()
export class InMokeService{
  private ins:In[] = [];
constructor()
{
  let in1:In = new In('in_20190603_144',465,35,3);
  let in2:In = new In('in_20170613_14555',3455,100,0);
  let in3:In = new In('in_20191023_164',150,35,3);
  let in4:In = new In('in_20190603_144',40,4.5,3);
  let in5:In = new In('in_20190603_144',465,35,3);
  let in6:In = new In('in_20170613_14555',3455,100,0);
  let in7:In = new In('in_20191023_164',150,35,3);
  let in8:In = new In('in_20190603_144',40,4.5,3);
  let in9:In = new In('in_20190603_144',465,35,3);
  this.ins.push(in1);
  this.ins.push(in2);
  this.ins.push(in3);
  this.ins.push(in4);
  this.ins.push(in5);
  this.ins.push(in6);
  this.ins.push(in7);
  this.ins.push(in8);
  this.ins.push(in9);
  this.ins.push(in2);
  this.ins.push(in3);
  this.ins.push(in4);
  this.ins.push(in5);
  this.ins.push(in6);
  this.ins.push(in7);
  this.ins.push(in8);
  this.ins.push(in9);
  this.ins.push(in8);
  this.ins.push(in9);
  this.ins.push(in2);
  this.ins.push(in3);
  this.ins.push(in4);
  this.ins.push(in5);
  this.ins.push(in6);
  this.ins.push(in7);
  this.ins.push(in8);
  this.ins.push(in9);
}

public getIns():In[]
{
  return this.ins;
}


}
