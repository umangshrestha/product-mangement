import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpaces implements PipeTransform {
    transform(data: string, delimiter: string) {
        return data.replace(delimiter, ' ');
    }
}