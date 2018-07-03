import { Person } from "./person";

export interface PeopleResponse {
	count: string,
	next: string,
	previous: string|null,
	results: Array<Person>
}
