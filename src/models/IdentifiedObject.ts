/**
 * IdentifiedObject class which is a base for every stored item.
 */
export class IdentifiedObject {
	id: string;

	constructor(id: string) {
		this.id = id;
	}
}
