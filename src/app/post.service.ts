import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import blogData from './blogData.json';
import { HttpClient } from "@angular/common/http";

import { BlogPost } from './BlogPost';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // blogData: Array<BlogPost> = blogData;
 
  constructor(private http: HttpClient) { }
  perPage = 6;
    // Get all posts
    getAllPosts(): Observable<BlogPost[]> {
      const perPage = Number.MAX_SAFE_INTEGER.toString();
  
      let params = {
        page: "1",
        perPage: perPage
      }
      let url = `https://web4222assignment5.herokuapp.com/api/posts`

      return this.http.get<BlogPost[]>(url, { params });
    }

  getPosts(page,tag,category): Observable<BlogPost[]>{
    let url = `https://web4222assignment5.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}`
    if(tag) url += `&tag=${tag}`;
    if(category) url += `&category=${category}`
     // Extra Challenge
     window.scrollTo(0,0);
    return this.http.get<BlogPost[]>(url);
  }
  getPostById(id): Observable<BlogPost>{
     // Extra Challenge
     window.scrollTo(0,0);
    return this.http.get<BlogPost>(`https://web4222assignment5.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
     // Extra Challenge
     window.scrollTo(0,0);
    return this.http.get<any>('https://web4222assignment5.herokuapp.com/api/categories/');
  } 

  getTags(): Observable<string[]>{
     // Extra Challenge
     window.scrollTo(0,0);
    return this.http.get<string[]>('https://web4222assignment5.herokuapp.com/api/tags/');
  } 
  // Create new post
  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://web4222assignment5.herokuapp.com/api/posts`, data);
  }

  // Update post
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://web4222assignment5.herokuapp.com/api/posts/${id}`, data);
  }

  // Delete post
  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://web4222assignment5.herokuapp.com/api/posts/${id}`);
  }
}
