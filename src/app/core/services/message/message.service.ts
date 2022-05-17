import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnInit, OnDestroy {

  private message: string[] = [];

  constructor(private router: Router) { }

  public ngOnInit(): void {
      
  }

  public ngOnDestroy(): void {
      
  }

  public getMessage(): string[] {
    return this.message || [];
  }

  public setMessage(message: string) {
    this.message.push(message);
  }

}
