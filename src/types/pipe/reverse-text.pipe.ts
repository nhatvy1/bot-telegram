import { Injectable, PipeTransform } from '@nestjs/common';

export class ReverseTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}