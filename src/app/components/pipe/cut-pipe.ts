import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cut',
})
export class CutPipe implements PipeTransform {
    transform(value: string | null, limit?: number, suffix: string = '...'): string {
        if (!value) return '';
        const saveLimit = limit ?? 10;
        return value.length > saveLimit ? value.substring(0, saveLimit) + suffix : value;
    }
}
