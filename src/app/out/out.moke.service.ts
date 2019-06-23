import {Injectable} from '@angular/core';
import {Out} from '../shared/out';
@Injectable()
export class OutMokeService
{
  private outs:Out[] = [];
 constructor()
 {
   let out1:Out =new Out('out2019');
   let out2:Out =new Out();
   let out3:Out =new Out();
   let out4:Out =new Out();
   this.outs.push(out1);
   this.outs.push(out2);
   this.outs.push(out3);
   this.outs.push(out4);
 }




}
