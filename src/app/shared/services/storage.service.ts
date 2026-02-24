import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    get<T = string>(key: string): T | null {
        const value = localStorage.getItem(key);
        if (value === null) return null;
        try {
            return JSON.parse(value) as T;
        } catch {
            return value as unknown as T;
        }
    }

    set<T>(key: string, input: T): string {
        const value = typeof input === 'string' ? input : JSON.stringify(input);
        localStorage.setItem(key, value);
        return value;
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }
}
