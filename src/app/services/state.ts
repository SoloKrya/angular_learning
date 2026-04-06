import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
    name: string;
    age: number;
}

@Injectable({
    providedIn: 'root',
})
export class State {
    private user$ = new BehaviorSubject<User | null>(null);

    setUser(user: User) {
        this.user$.next(user);
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable(); //инкапсуляция
    }
}
