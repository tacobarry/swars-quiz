export interface PaginationResponse {
	count: string,
	next: string,
	url: string|null,
	previous: string|null,
	results: Array<any>
}