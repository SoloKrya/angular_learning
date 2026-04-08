import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'betterCut',
})
export class BetterCutPipe implements PipeTransform {
    transform(value: string | null, config: { limit?: number; suffix?: string }): string {
        if (!value) return '';
        const limit = config.limit ?? 10;
        const suffix = config.suffix ?? '...';
        return value.length > limit ? value.substring(0, limit) + suffix : value;
    }
}
