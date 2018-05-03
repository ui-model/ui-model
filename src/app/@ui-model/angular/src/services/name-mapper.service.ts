import { Injectable } from '@angular/core';

@Injectable()
export class NameMapper {

  constructor() {
  }

  toNatureCase(name: string): string {
    return tokenize(name)
      .map((token) => titleCase(token))
      .join(' ');
  }
}

function isUppercase(value: string): boolean {
  return /^[A-Z]+$/g.test(value);
}

function titleCase(value: string): string {
  if (isUppercase(value)) {
    return value;
  }
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

function tokenize(name: string = ''): string[] {
  return name.split(/([A-Z][a-z0-9_\b]+)/g).filter((token) => !!token);
}
