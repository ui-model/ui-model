import { Injectable } from '@angular/core';

@Injectable()
export class NameMapper {

  constructor() {
  }

  private isUppercase(value: string): boolean {
    return /^[A-Z]+$/g.test(value);
  }

  private titleCase(value: string): string {
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }

  tokenize(name: string = ''): string[] {
    return name.split(/([A-Z][a-z0-9_\b]+)/g).filter((token) => !!token);
  }

  toNatureCase(name: string): string {
    const tokens = this.tokenize(name).map((token, index) => {
      if (!token || this.isUppercase(token)) {
        return token;
      } else if (index === 0) {
        return this.titleCase(token);
      } else {
        return token.toLowerCase();
      }
    });
    return tokens.join(' ');
  }
}
