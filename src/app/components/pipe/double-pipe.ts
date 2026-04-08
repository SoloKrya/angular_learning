import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'double',
})
export class DoublePipe implements PipeTransform {
    transform(value: number | null): number | null {
        if (value === null) return value;
        return value * 2;
    }
}
