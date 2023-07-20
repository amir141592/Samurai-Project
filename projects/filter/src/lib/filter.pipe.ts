import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'SamuraiFilter',
	standalone: true,
})
export class FilterPipe implements PipeTransform {
	transform(
		objects: any[],
		property: string,
		filterValue: boolean | number | string,
		filterCondition: 'equal' | 'notEqual' | 'include' | 'notInclude' | 'equal/greater' | 'equal/lower' | 'greater' | 'lower' = 'equal'
	): any[] {
		let filteredObjects: any[] = [];

		for (const object of objects)
			if (Object.prototype.hasOwnProperty.call(object, property))
				switch (typeof filterValue) {
					case 'string':
						switch (filterCondition) {
							case 'equal':
								if (object[property] === filterValue) filteredObjects.push(object);
								break;

							case 'notEqual':
								if (object[property] !== filterValue) filteredObjects.push(object);
								break;

							case 'include':
								if ((object[property] as string).includes(filterValue)) filteredObjects.push(object);
								break;

							case 'notInclude':
								if (!(object[property] as string).includes(filterValue)) filteredObjects.push(object);
								break;
						}
						break;

					case 'number':
						switch (filterCondition) {
							case 'equal':
								if (object[property] === filterValue) filteredObjects.push(object);
								break;

							case 'notEqual':
								if (object[property] !== filterValue) filteredObjects.push(object);
								break;

							case 'equal/greater':
								if (object[property] >= filterValue) filteredObjects.push(object);
								break;

							case 'greater':
								if (object[property] > filterValue) filteredObjects.push(object);
								break;

							case 'equal/lower':
								if (object[property] <= filterValue) filteredObjects.push(object);
								break;

							case 'lower':
								if (object[property] < filterValue) filteredObjects.push(object);
								break;
						}
						break;

					case 'boolean':
						switch (filterCondition) {
							case 'equal':
								if (object[property] === filterValue) filteredObjects.push(object);
								break;

							case 'notEqual':
								if (object[property] !== filterValue) filteredObjects.push(object);
								break;
						}
						break;
				}

		return filteredObjects;
	}
}
