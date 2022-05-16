import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  httpOptionsCha: any
  api_url = "https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) { 
    this.httpOptionsCha = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }

  getAllCharacters(){
    return new Promise(resolve => {
      this.http.get(this.api_url+'/character',this.httpOptionsCha).subscribe(res => {
        console.log(res);
        resolve(res);
      }, err=> {
        console.log(err)
      })
    })
  }

  getAllEpisodes(){
    return new Promise(resolver => {
      this.http.get(this.api_url+'/episode').subscribe(resp => {
        console.log(resp);
        resolver(resp);
      }, err=> {
        console.log(err);
      });
    });
  }

  getAllLocations(){
    return new Promise(resolver => {
      this.http.get(this.api_url+'/location').subscribe(resp => {
        console.log(resp);
        resolver(resp);
      }, err=> {
        console.log(err);
      });
    });
  }
}

