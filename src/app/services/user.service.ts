import{Injectable}from'@angular/core';
import{HttpClient, HttpHeaders}from'@angular/common/http';
import { Observable, of } from 'rxjs';
import { Utilisateur } from 'src/app/model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})
export class UserService {
  baseUrl: string= 'http://localhost:8084/com.gestionformation/webapi/users';
  constructor(private http: HttpClient) { }

  allUsers() {
      return this.http.get(this.baseUrl);
  }

  addUser(user: Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.baseUrl,user,httpOptions)
  }


}

