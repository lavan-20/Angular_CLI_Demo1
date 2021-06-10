import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData:any,pipeTransform:any) {
	// @ts-ignore
    return pipeData.filter(input => {
		return(
			input["name"].toLowerCase().includes(pipeTransform.toLowerCase())||
			input.reknown.toLowerCase().includes(pipeTransform.toLowerCase())
		);
	})
  }

}
