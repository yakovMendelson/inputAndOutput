import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  constructor(private http:HttpClient) {

    }
    
  //   post(){
  //     this.http.post("yakovTesting.com",{"yakov":"test"}).subscribe((data)=>{console.log(data) })
  //     this.http.post("ynet.com",{"yakov":"test"}).subscribe((data)=>{console.log(data)});
  //  }
}
