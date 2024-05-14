export namespace DemoWebApi_Controllers_Client {

	/**
	 * This class is used to carry the result of various file uploads.
	 */
	export interface FileResult {

		/**
		 * Gets or sets the local path of the file saved on the server.
		 */
		fileNames?: Array<string>;

		/**
		 * Gets or sets the submitter as indicated in the HTML form used to upload the data.
		 */
		submitter?: string | null;
	}


	/**
	 * Complex hero type
	 */
	export interface Hero {
		address?: DemoWebApi_DemoData_Client.Address;
		death?: Date | null;

		/** Type: DateOnly */
		dob?: Date | null;
		emailAddress?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/**
		 * Required
		 * String length: inclusive between 2 and 120
		 */
		name?: string | null;
		phoneNumbers?: Array<DemoWebApi_DemoData_Client.PhoneNumber>;

		/** Min length: 6 */
		webAddress?: string | null;
	}

	export interface SuperHero extends DemoWebApi_Controllers_Client.Hero {
		super?: boolean | null;
	}


	/**
	 * For testing different commbinations of parameters and returns
	 */
	export class DateTypes {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * GET api/DateTypes/GetDateOnlyMin
		 * @return {Date} Type: DateOnly
		 */
		getDateOnlyMin(headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/GetDateOnlyMin', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/DateTypes/NullableDatetime/{hasValue}
		 */
		getDateTime(hasValue?: boolean | null, headersHandler?: () => {[header: string]: string}): Promise<Date | null> {
			return fetch(this.baseUri + 'api/DateTypes/NullableDatetime/' + hasValue, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * return DateTimeOffset.Now
		 * GET api/DateTypes/ForDateTimeOffset
		 */
		getDateTimeOffset(headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTimeOffset', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/DateTypes/NextHour/{dt}
		 */
		getNextHour(dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/NextHour/' + dt?.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * If Dt is not defined, add a hour from now
		 * GET api/DateTypes/NextHourNullable?n={n}&dt={dt}
		 * @param {number} n Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getNextHourNullable(n?: number | null, dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/NextHourNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/DateTypes/NextYear/{dt}
		 */
		getNextYear(dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/NextYear/' + dt?.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * If Dt is not defined, add a year from now
		 * GET api/DateTypes/NextYearNullable?n={n}&dt={dt}
		 * @param {number} n Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getNextYearNullable(n?: number | null, dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/NextYearNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Client should send DateTime.Date
		 * POST api/DateTypes/IsDateTimeDate
		 */
		isDateTimeDate(dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: Date, item2: Date}> {
			return fetch(this.baseUri + 'api/DateTypes/IsDateTimeDate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(dt) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/IsDateTimeOffsetDate
		 */
		isDateTimeOffsetDate(dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: Date, item2: Date}> {
			return fetch(this.baseUri + 'api/DateTypes/IsDateTimeOffsetDate', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(dt) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/ForDateOnly
		 * @param {Date} d Type: DateOnly
		 * @return {Date} Type: DateOnly
		 */
		postDateOnly(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateOnly', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/DateOnlyNullable
		 */
		postDateOnlyNullable(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date | null> {
			return fetch(this.baseUri + 'api/DateTypes/DateOnlyNullable', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/ForDateTime
		 */
		postDateTime(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTime', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/DateTimeNullable
		 */
		postDateTimeNullable(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date | null> {
			return fetch(this.baseUri + 'api/DateTypes/DateTimeNullable', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * return d;
		 * POST api/DateTypes/ForDateTimeOffset
		 */
		postDateTimeOffset(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTimeOffset', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * return d.ToString("O")
		 * POST api/DateTypes/ForDateTimeOffsetForO
		 */
		postDateTimeOffsetForO(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForO', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetForOffset
		 */
		postDateTimeOffsetForOffset(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForOffset', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) });
		}

		/**
		 * Returned is DateTimeOffset?
		 * POST api/DateTypes/DateTimeOffsetNullable
		 */
		postDateTimeOffsetNullable(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date | null> {
			return fetch(this.baseUri + 'api/DateTypes/DateTimeOffsetNullable', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetStringForOffset
		 */
		postDateTimeOffsetStringForOffset(s?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/DateTypes/ForDateTimeOffsetStringForOffset', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(s) });
		}

		/**
		 * POST api/DateTypes/NextYear
		 */
		postNextYear(dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/NextYear', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(dt) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/DateTypes/DateOnlyStringQuery?d={d}
		 * @return {Date} Type: DateOnly
		 */
		queryDateOnlyAsString(d?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/DateOnlyStringQuery?d=' + (!d ? '' : encodeURIComponent(d)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/DateTypes/RouteDateTimeOffset/{d}
		 */
		routeDateTimeOffset(d?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Date> {
			return fetch(this.baseUri + 'api/DateTypes/RouteDateTimeOffset/' + d?.toISOString(), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Return Tuple DateTime?, DateTime?
		 * GET api/DateTypes/SearchDateRange?startDate={startDate}&endDate={endDate}
		 * @param {Date | null} startDate DateTime? startDate = null
		 * @param {Date | null} endDate DateTime? endDate = null
		 */
		searchDateRange(startDate?: Date | null, endDate?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: Date | null, item2: Date | null}> {
			return fetch(this.baseUri + 'api/DateTypes/SearchDateRange?' + (startDate ? 'startDate=' + startDate?.toISOString() : '') + (endDate ? '&endDate=' + endDate?.toISOString() : ''), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}
	}


	/**
	 * Entities, Person and Company
	 * Some with AuthorizeAttribute
	 */
	export class Entities {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * POST api/Entities/createCompany
		 */
		createCompany(p?: DemoWebApi_DemoData_Client.Company | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Company> {
			return fetch(this.baseUri + 'api/Entities/createCompany', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPerson
		 * @return {string} Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createPerson(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Entities/createPerson', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPerson2
		 */
		createPerson2(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPerson2', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPerson3
		 */
		createPerson3(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPerson3', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPersonByAdmin
		 * Status Codes: 404:NotFound, 204:NoContent, 422:UnprocessableEntity
		 */
		createPersonByAdmin(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPersonByAdmin', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPersonWeak
		 * Status Codes: 404:NotFound, 204:NoContent, 200:OK : DemoWebApi.DemoData.Person
		 */
		createPersonWeak(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPersonWeak', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPersonWithNotFound
		 * Status Codes: 404:NotFound
		 */
		createPersonWithNotFound(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPersonWithNotFound', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/createPersonWithStatuses
		 * Status Codes: 404:NotFound, 204:NoContent, 422:UnprocessableEntity
		 */
		createPersonWithStatuses(p?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/createPersonWithStatuses', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * DELETE api/Entities/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Entities/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Entities/Company/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		getCompany(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Company> {
			return fetch(this.baseUri + 'api/Entities/Company/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Entities/Mims
		 */
		getMims(p?: DemoWebApi_DemoData_Client.MimsPackage | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.MimsResult<string>> {
			return fetch(this.baseUri + 'api/Entities/Mims', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(p) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post MyGeneric string, decimal, double
		 * POST api/Entities/MyGeneric
		 */
		getMyGeneric(s?: DemoWebApi_DemoData_Client.MyGeneric<string, number, number> | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, number>> {
			return fetch(this.baseUri + 'api/Entities/MyGeneric', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(s) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post MyGeneric string, decimal, Person
		 * POST api/Entities/MyGenericPerson
		 */
		getMyGenericPerson(s?: DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/Entities/MyGenericPerson', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(s) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Return empty body, status 204. MaybeNull
		 * GET api/Entities/NullCompany
		 */
		getNullCompany(headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Company | null> {
			return fetch(this.baseUri + 'api/Entities/NullCompany', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get a person
		 * so to know the person
		 * GET api/Entities/getPerson/{id}
		 * @param {string} id unique id of that guy
		 * @return {DemoWebApi_DemoData_Client.Person} person in db
		 */
		getPerson(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/getPerson/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Entities/getPerson2/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		getPerson2(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Entities/getPerson2/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Entities/link?id={id}&relationship={relationship}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		linkPerson(id?: string | null, relationship?: string | null, person?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + (!relationship ? '' : encodeURIComponent(relationship)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(person) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
		 * PATCH api/Entities/patchPerson
		 */
		patchPerson(person?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Entities/patchPerson', { method: 'patch', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(person) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Entities/IdMap
		 */
		postIdMap(idMap?: DemoWebApi_DemoData_Client.IdMap | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.IdMap> {
			return fetch(this.baseUri + 'api/Entities/IdMap', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(idMap) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Entities/updatePerson
		 */
		updatePerson(person?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Entities/updatePerson', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(person) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}
	}


	/**
	 * Heroes operations. Decorated by nullable directive.
	 */
	export class Heroes {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * DELETE api/Heroes/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Heroes/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Heroes/asyncHeroes
		 */
		getAsyncHeroes(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_Controllers_Client.Hero>> {
			return fetch(this.baseUri + 'api/Heroes/asyncHeroes', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get a hero. Nullable reference. MaybeNull
		 * GET api/Heroes/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		getHero(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_Controllers_Client.Hero | null> {
			return fetch(this.baseUri + 'api/Heroes/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all heroes.
		 * GET api/Heroes
		 */
		getHeros(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_Controllers_Client.Hero>> {
			return fetch(this.baseUri + 'api/Heroes', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * MaybeNull
		 * GET api/Heroes/super?id={id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		getSuperHero(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_Controllers_Client.SuperHero | null> {
			return fetch(this.baseUri + 'api/Heroes/super?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Heroes
		 */
		post(name?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_Controllers_Client.Hero> {
			return fetch(this.baseUri + 'api/Heroes', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(name) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Add a hero. The client will not expect null. NotNull
		 * POST api/Heroes/q?name={name}
		 * @param {string} name name of hero
		 * @return {DemoWebApi_Controllers_Client.Hero} Always object.
		 */
		postWithQuery(name?: string | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_Controllers_Client.Hero> {
			return fetch(this.baseUri + 'api/Heroes/q?name=' + (!name ? '' : encodeURIComponent(name)), { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Update hero.
		 * PUT api/Heroes
		 */
		put(hero?: DemoWebApi_Controllers_Client.Hero | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_Controllers_Client.Hero> {
			return fetch(this.baseUri + 'api/Heroes', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(hero) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Search heroes
		 * GET api/Heroes/search/{name}
		 * @param {string} name keyword contained in hero name.
		 * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
		 */
		search(name?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_Controllers_Client.Hero>> {
			return fetch(this.baseUri + 'api/Heroes/search/' + (!name ? '' : encodeURIComponent(name)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}
	}


	/**
	 * For testing different commbinations of parameters and returns
	 */
	export class Numbers {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * GET api/Numbers/byte?d={d}
		 * @param {number} d Type: byte, 0 to 255
		 * @return {number} Type: byte, 0 to 255
		 */
		getByte(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/byte?d=' + d, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Numbers/byteWithRange?d={d}
		 * @param {number} d Byte for small number.
		 * @return {number} Type: byte, 0 to 255
		 */
		getByteWithRange(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/byteWithRange?d=' + d, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/byte
		 * @param {number} d Type: byte, 0 to 255
		 * @return {number} Type: byte, 0 to 255
		 */
		postByDOfByte(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/byte', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/sbyte
		 * @param {number} d Type: sbyte, -128 to 127
		 * @return {number} Type: sbyte, -128 to 127
		 */
		postByDOfSByte(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/sbyte', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/short
		 * @param {number} d Type: short, -32,768 to 32,767
		 * @return {number} Type: short, -32,768 to 32,767
		 */
		postByDOfInt16(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/short', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/ushort
		 * @param {number} d Type: ushort, 0 to 65,535
		 * @return {number} Type: ushort, 0 to 65,535
		 */
		postByDOfUInt16(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/ushort', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/int
		 * @param {number} d Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postByDOfInt32(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/int', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/long
		 * @param {string} d Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {string} Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		postByDOfInt64(d?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/long', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/ulong
		 * @param {string} d Type: ulong, 0 to 18,446,744,073,709,551,615
		 * @return {string} Type: ulong, 0 to 18,446,744,073,709,551,615
		 */
		postByDOfUInt64(d?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/ulong', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/bigInteger
		 * @param {string} bigInteger Type: BigInteger
		 * @return {string} Type: BigInteger
		 */
		postBigInteger(bigInteger?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/bigInteger', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(bigInteger) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/bigIntegralAsStringForJs
		 */
		postBigIntegralAsStringForJs(bigIntegral?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/bigIntegralAsStringForJs', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(bigIntegral) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Numbers/BigNumbers
		 */
		postBigNumbers(bigNumbers?: DemoWebApi_DemoData_Client.BigNumbers | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.BigNumbers> {
			return fetch(this.baseUri + 'api/Numbers/BigNumbers', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(bigNumbers) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/int128
		 * @param {string} int128 Type: Int128, -170141183460469231731687303715884105728 to 170141183460469231731687303715884105727
		 * @return {string} Type: Int128, -170141183460469231731687303715884105728 to 170141183460469231731687303715884105727
		 */
		postInt128(int128?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/int128', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(int128) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/int64
		 * @param {string} int64 Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {string} Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		postInt64(int64?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/int64', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(int64) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/IntegralEntity
		 */
		postIntegralEntity(integralEntity?: DemoWebApi_DemoData_Client.IntegralEntity | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.IntegralEntity> {
			return fetch(this.baseUri + 'api/Numbers/IntegralEntity', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(integralEntity) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/IntegralEntityMustBeValid
		 */
		postIntegralEntityMustBeValid(integralEntity?: DemoWebApi_DemoData_Client.IntegralEntity | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.IntegralEntity> {
			return fetch(this.baseUri + 'api/Numbers/IntegralEntityMustBeValid', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(integralEntity) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/intRange
		 * @param {number} d Type: int
		 *     Range: inclusive between 1 and 100
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postIntWithRange(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Numbers/intRange', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Range is with double, not long. Precision of double: ~15-17 digits, while long.MaxValue 9223372036854775807 has 19 decimal digits.
		 * POST api/Numbers/longRange
		 * @param {string} d Type: long
		 *     Range: inclusive between 1000 and 9223372036854775800
		 * @return {string} Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		postLongWithRange(d?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/longRange', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/uint128
		 * @param {string} uint128 Type: UInt128, 0 to 340282366920938463463374607431768211455
		 * @return {string} Type: UInt128, 0 to 340282366920938463463374607431768211455
		 */
		postUint128(uint128?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/uint128', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(uint128) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Numbers/uint64
		 * @param {string} uint64 Type: ulong, 0 to 18,446,744,073,709,551,615
		 * @return {string} Type: ulong, 0 to 18,446,744,073,709,551,615
		 */
		postUint64(uint64?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Numbers/uint64', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(uint64) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}
	}


	/**
	 * For testing posting and getting string data. Returned string is JSON object.
	 */
	export class StringData {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * Athlethe Search
		 * GET api/StringData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 * @param {number | null} take Generic optional parameter. Default 10
		 * @param {number} skip Default 0
		 * @param {string} order default null
		 */
		athletheSearch(take?: number | null, skip?: number | null, order?: string | null, sort?: string | null, search?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/StringData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * GET api/StringData/String
		 */
		getABCDE(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/StringData/String', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Return empty string JSON object. Status 200.
		 * GET api/StringData/EmptyString
		 */
		getEmptyString(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/StringData/EmptyString', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Return empty body with status 204 No Content, even though the default mime type is application/json. MaybeNull
		 * GET api/StringData/NullString
		 */
		getNullString(headersHandler?: () => {[header: string]: string}): Promise<string | null> {
			return fetch(this.baseUri + 'api/StringData/NullString', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}
	}


	/**
	 * For testing different commbinations of parameters and returns
	 */
	export class SuperDemo {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * GET api/SuperDemo/ActionResult
		 */
		getActionResult(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/ActionResult', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ActionResult2
		 */
		getActionResult2(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/ActionResult2', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ActionStringResult
		 * Status Codes: 200:OK : System.String
		 */
		getActionStringResult(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/ActionStringResult', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * GET api/SuperDemo/BadRequest
		 */
		getBadRequest(headersHandler?: () => {[header: string]: string}): Promise<Blob> {
			return fetch(this.baseUri + 'api/SuperDemo/BadRequest', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.blob(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/BadRequest2
		 */
		getBadRequest2(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/BadRequest2', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/bool
		 */
		getBool(headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/SuperDemo/bool', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/byte
		 * @return {number} Type: byte, 0 to 255
		 */
		getbyte(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/byte', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ByteArray
		 */
		getByteArray(headersHandler?: () => {[header: string]: string}): Promise<Array<number>> {
			return fetch(this.baseUri + 'api/SuperDemo/ByteArray', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/char
		 * @return {string} Type: char
		 */
		getChar(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/char', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/Collection
		 */
		getCollection(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/Collection', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/enumGet?d={d}
		 */
		getDay(d?: DemoWebApi_DemoData_Client.Days | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Days> {
			return fetch(this.baseUri + 'api/SuperDemo/enumGet?d=' + d, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/decimal
		 * @return {number} Type: decimal
		 */
		getDecimal(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/decimal', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo
		 * GET api/SuperDemo/decimalArrayQ?a={a}
		 */
		getDecimalArrayQ(a?: Array<number> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<number>> {
			return fetch(this.baseUri + 'api/SuperDemo/decimalArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/decimal/{d}
		 * @param {number} d Type: decimal
		 * @return {number} Type: decimal
		 */
		getDecimalSquare(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/decimal/' + d, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/DecimalZero
		 * @return {number} Type: decimal
		 */
		getDecimalZero(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/DecimalZero', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/StringStringDic
		 */
		getDictionary(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: string }> {
			return fetch(this.baseUri + 'api/SuperDemo/StringStringDic', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/StringPersonDic
		 */
		getDictionaryOfPeople(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: DemoWebApi_DemoData_Client.Person }> {
			return fetch(this.baseUri + 'api/SuperDemo/StringPersonDic', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/StringPersonDic2
		 */
		getDictionaryOfPeople2(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: DemoWebApi_DemoData_Client.Person }> {
			return fetch(this.baseUri + 'api/SuperDemo/StringPersonDic2', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/doulbe
		 * @return {number} Type: double
		 */
		getdouble(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/doulbe', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Result of 0.1d + 0.2d - 0.3d
		 * GET api/SuperDemo/DoubleZero
		 * @return {number} Type: double
		 */
		getDoubleZero(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/DoubleZero', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo IEnumerable Days
		 * GET api/SuperDemo/enumArrayDays?a={a}
		 */
		getEnumArrayDays(a?: Array<DemoWebApi_DemoData_Client.Days> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Days>> {
			return fetch(this.baseUri + 'api/SuperDemo/enumArrayDays?'+a?.map(z => `a=${z}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/enumArrayQ2?a={a}
		 */
		getEnumArrayQ2(a?: Array<number> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<number>> {
			return fetch(this.baseUri + 'api/SuperDemo/enumArrayQ2?'+a?.map(z => `a=${z}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/FloatZero
		 * @return {number} Type: float
		 */
		getFloatZero(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/FloatZero', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ICollection
		 */
		getICollection(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/ICollection', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/IList
		 */
		getIList(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/IList', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/int2d
		 */
		getInt2D(headersHandler?: () => {[header: string]: string}): Promise<number[][]> {
			return fetch(this.baseUri + 'api/SuperDemo/int2d', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/int2dJagged
		 */
		getInt2DJagged(headersHandler?: () => {[header: string]: string}): Promise<Array<Array<number>>> {
			return fetch(this.baseUri + 'api/SuperDemo/int2dJagged', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/intArray
		 */
		getIntArray(headersHandler?: () => {[header: string]: string}): Promise<Array<number>> {
			return fetch(this.baseUri + 'api/SuperDemo/intArray', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo int[];
		 * GET api/SuperDemo/intArrayQ?a={a}
		 */
		getIntArrayQ(a?: Array<number> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<number>> {
			return fetch(this.baseUri + 'api/SuperDemo/intArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo IEnumerable long
		 * GET api/SuperDemo/intArrayQ2?a={a}
		 */
		getIntArrayQ2(a?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/SuperDemo/intArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/int/{d}
		 * @param {number} d Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getIntSquare(d?: number | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/int/' + d, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/IReadOnlyCollection
		 */
		getIReadOnlyCollection(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/IReadOnlyList
		 */
		getIReadOnlyList(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/IReadOnlyList', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/KeyValuePair
		 */
		getKeyhValuePair(headersHandler?: () => {[header: string]: string}): Promise<{key: string, value: DemoWebApi_DemoData_Client.Person }> {
			return fetch(this.baseUri + 'api/SuperDemo/KeyValuePair', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/List
		 */
		getList(headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Person>> {
			return fetch(this.baseUri + 'api/SuperDemo/List', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * False to return null, and true to return 1000
		 * GET api/SuperDemo/NullableDecimal/{hasValue}
		 */
		getNullableDecimal(hasValue?: boolean | null, headersHandler?: () => {[header: string]: string}): Promise<number | null> {
			return fetch(this.baseUri + 'api/SuperDemo/NullableDecimal/' + hasValue, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * MaybeNull
		 * GET api/SuperDemo/NullObject
		 */
		getNullPerson(headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person | null> {
			return fetch(this.baseUri + 'api/SuperDemo/NullObject', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
		 */
		getPrimitiveNullable(location?: string | null, dd?: number | null, de?: number | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: number | null, item3: number | null}> {
			return fetch(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + (!location ? '' : encodeURIComponent(location)) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
		 */
		getPrimitiveNullable2(dd?: number | null, de?: number | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: number | null, item2: number | null}> {
			return fetch(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/sbyte
		 * @return {number} Type: sbyte, -128 to 127
		 */
		getsbyte(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/sbyte', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/short
		 * @return {number} Type: short, -32,768 to 32,767
		 */
		getShort(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/short', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo string array
		 * GET api/SuperDemo/stringArrayQ?a={a}
		 */
		getStringArrayQ(a?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/SuperDemo/stringArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo List string
		 * GET api/SuperDemo/stringArrayQ2?a={a}
		 */
		getStringArrayQ2(a?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/SuperDemo/stringArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * ActionResult with FileStreamResult
		 * GET api/SuperDemo/TextStream
		 */
		getTextStream(headersHandler?: () => {[header: string]: string}): Promise<Blob> {
			return fetch(this.baseUri + 'api/SuperDemo/TextStream', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.blob(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/uint
		 * @return {number} Type: uint, 0 to 4,294,967,295
		 */
		getUint(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/uint', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ulong
		 * @return {string} Type: ulong, 0 to 18,446,744,073,709,551,615
		 */
		getulong(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/ulong', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/SuperDemo/ushort
		 * @return {number} Type: ushort, 0 to 65,535
		 */
		getUShort(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/ushort', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/ActionResult
		 */
		postActionResult(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/ActionResult', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/PostActionResult2
		 */
		postActionResult2(s?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Blob> {
			return fetch(this.baseUri + 'api/SuperDemo/PostActionResult2', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(s) }).then(d => {if (d.status<=202) return d.blob(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/PostActionResult3
		 */
		postActionResult3(person?: DemoWebApi_DemoData_Client.Person | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/SuperDemo/PostActionResult3', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(person) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post a collection of person
		 * POST api/SuperDemo/Collection
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postCollection(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/Collection', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/enumPost?d={d}
		 */
		postDay(d?: DemoWebApi_DemoData_Client.Days | null, d2?: DemoWebApi_DemoData_Client.Days | null, headersHandler?: () => {[header: string]: string}): Promise<Array<DemoWebApi_DemoData_Client.Days>> {
			return fetch(this.baseUri + 'api/SuperDemo/enumPost?d=' + d, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d2) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo Dic string and person
		 * POST api/SuperDemo/StringPersonDic
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postDictionary(dic?: {[id: string]: DemoWebApi_DemoData_Client.Person } | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/StringPersonDic', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(dic) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/Guids
		 */
		postGuids(guids?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/SuperDemo/Guids', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(guids) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post ICollection of person
		 * POST api/SuperDemo/ICollection
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postICollection(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/ICollection', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post IList of person
		 * POST api/SuperDemo/IList
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postIList(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/IList', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/int2d
		 */
		postInt2D(a?: number[][] | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/SuperDemo/int2d', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(a) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo int[][]
		 * POST api/SuperDemo/int2djagged
		 */
		postInt2DJagged(a?: Array<Array<number>> | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/SuperDemo/int2djagged', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(a) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Demo int[]
		 * POST api/SuperDemo/intArray
		 * @param {Array<number>} a Min length: 1
		 *     Max length: 10
		 */
		postIntArray(a?: Array<number> | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/SuperDemo/intArray', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(a) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post IReadOnlyCollection of person
		 * POST api/SuperDemo/IReadOnlyCollection
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postIReadOnlyCollection(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post e of person
		 * POST api/SuperDemo/IReadOnlyList
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postIReadOnlyList(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/IReadOnlyList', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post a list of person
		 * POST api/SuperDemo/List
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postList(list?: Array<DemoWebApi_DemoData_Client.Person> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/SuperDemo/List', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(list) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/SuperDemo/PostEmpty/{i}
		 * @param {number} i Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postWithQueryButEmptyBody(s?: string | null, i?: number | null, headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: number}> {
			return fetch(this.baseUri + 'api/SuperDemo/PostEmpty/' + i, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(s) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}
	}


	/**
	 * For testing posting and getting string data. String returned is text/plain by default
	 */
	export class TextData {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * GET api/TextData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 * @param {number} skip Type: int, -2,147,483,648 to 2,147,483,647
		 */
		athletheSearch(take?: number | null, skip?: number | null, order?: string | null, sort?: string | null, search?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/TextData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * GET api/TextData/String
		 */
		getABCDE(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/TextData/String', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Return empty body with status 200.
		 * GET api/TextData/EmptyString
		 */
		getEmptyString(headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/TextData/EmptyString', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * MaybeNull
		 * GET api/TextData/NullableString
		 */
		getNullableString(headersHandler?: () => {[header: string]: string}): Promise<string | null> {
			return fetch(this.baseUri + 'api/TextData/NullableString', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Return empty body with status 204 No Content.
		 * GET api/TextData/NullString
		 */
		getNullString(headersHandler?: () => {[header: string]: string}): Promise<string | null> {
			return fetch(this.baseUri + 'api/TextData/NullString', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}
	}


	/**
	 * https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3.3.3
	 */
	export class Tuple {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * Update in a transaction
		 * PUT api/Tuple/A1TupleArray
		 */
		a1TupleArray(idAndOrderArray?: Array<{item1: string, item2: number}> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Tuple/A1TupleArray', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(idAndOrderArray) });
		}

		/**
		 * Update IEnumerable Tuple in a transaction
		 * PUT api/Tuple/A2TupleArray
		 */
		a2TupleIEnumerable(idAndOrderArray?: Array<{item1: string, item2: number}> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Tuple/A2TupleArray', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(idAndOrderArray) });
		}

		/**
		 * Post tuple
		 * POST api/Tuple/ChangeName
		 */
		changeName(d?: {item1: string, item2: DemoWebApi_DemoData_Client.Person} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/ChangeName', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(d) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get Tuple in return. MaybeNull
		 * GET api/Tuple/PeopleCompany4
		 */
		getPeopleCompany4(headersHandler?: () => {[header: string]: string}): Promise<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company} | null> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany4', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * MaybeNull
		 * GET api/Tuple/PeopleCompany5
		 */
		getPeopleCompany5(headersHandler?: () => {[header: string]: string}): Promise<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company} | null> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany5', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple1
		 */
		getTuple1(headersHandler?: () => {[header: string]: string}): Promise<{item1: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple1', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple2
		 */
		getTuple2(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple2', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple3
		 */
		getTuple3(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple3', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple4
		 */
		getTuple4(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: string, item4: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple4', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple5
		 */
		getTuple5(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: string, item4: string, item5: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple5', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple6
		 */
		getTuple6(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple6', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tuple/Tuple7
		 */
		getTuple7(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple7', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post nested tuple
		 * GET api/Tuple/Tuple8
		 */
		getTuple8(headersHandler?: () => {[header: string]: string}): Promise<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}> {
			return fetch(this.baseUri + 'api/Tuple/Tuple8', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany2
		 */
		linkPeopleCompany2(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany2', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany3
		 */
		linkPeopleCompany3(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany3', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany4
		 */
		linkPeopleCompany4(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany4', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany5
		 */
		linkPeopleCompany5(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany5', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany6
		 */
		linkPeopleCompany6(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany6', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post long tuple
		 * POST api/Tuple/PeopleCompany7
		 */
		linkPeopleCompany7(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany7', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PeopleCompany8
		 */
		linkPeopleCompany8(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Person, rest: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PeopleCompany8', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/PersonCompany1
		 */
		linkPersonCompany1(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company} | null, headersHandler?: () => {[header: string]: string}): Promise<DemoWebApi_DemoData_Client.Person> {
			return fetch(this.baseUri + 'api/Tuple/PersonCompany1', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(peopleAndCompany) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tuple/Tuple1
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postTuple1(tuple?: {item1: number} | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Tuple/Tuple1', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Post tuple string int
		 * POST api/Tuple/Tuple2
		 */
		postTuple2(tuple?: {item1: string, item2: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple2', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple3
		 */
		postTuple3(tuple?: {item1: string, item2: string, item3: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple3', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple4
		 */
		postTuple4(tuple?: {item1: string, item2: string, item3: string, item4: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple4', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple5
		 */
		postTuple5(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple5', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple6
		 */
		postTuple6(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple6', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple7
		 */
		postTuple7(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple7', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * POST api/Tuple/Tuple8
		 */
		postTuple8(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: string, rest: {item1: string, item2: string, item3: string}} | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tuple/Tuple8', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tuple) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}
	}

	export class Values {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * DELETE api/Values/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 */
		delete(id?: number | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Values/' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of value
		 * GET api/Values
		 */
		get(headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/Values', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get by both Id and name
		 * GET api/Values/Name/{id}?name={name}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getByIdOfInt32AndNameOfString(id?: number | null, name?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Values/Name/' + id + '?name=' + (!name ? '' : encodeURIComponent(name)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Get by name
		 * GET api/Values?name={name}
		 */
		getByNameOfString(name?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Values?name=' + (!name ? '' : encodeURIComponent(name)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Get by Id
		 * GET api/Values/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getByIdOfInt32(id?: number | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Values/' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Get a list of value async, it is get2
		 * GET api/Values/Get2
		 */
		get2(headersHandler?: () => {[header: string]: string}): Promise<Array<string>> {
			return fetch(this.baseUri + 'api/Values/Get2', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Values
		 */
		post(value?: string | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Values', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(value) }).then(d => {if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;});
		}

		/**
		 * Update with valjue
		 * PUT api/Values/{id}
		 * @param {number} id Type: int, -2,147,483,648 to 2,147,483,647
		 */
		put(id?: number | null, value?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Values/' + id, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(value) });
		}
	}

}

export namespace DemoWebApi_DemoData_Another_Client {

	/**
	 * 2D position
	 * with X and Y
	 * for Demo
	 */
	export interface MyPoint {

		/**
		 * X
		 * Type: double
		 */
		x: number;

		/**
		 * Y
		 * Type: double
		 */
		y: number;
	}

}

export namespace DemoWebApi_DemoData_Base_Client {

	/**
	 * Base class of company and person
	 */
	export interface Entity {

		/**
		 * Multiple addresses
		 */
		addresses?: Array<DemoWebApi_DemoData_Client.Address>;

		/** Max length: 255 */
		emailAddress?: string | null;
		id?: string | null;

		/**
		 * Name of the entity.
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		name: string;
		phoneNumbers?: Array<DemoWebApi_DemoData_Client.PhoneNumber>;

		/** Type: Uri */
		web?: string | null;
	}

}

export namespace DemoWebApi_DemoData_Client {
	export interface Address {

		/** String length: inclusive between 2 and 50 */
		city?: string | null;

		/** String length: inclusive between 2 and 30 */
		country?: string | null;

		/** Type: GUID */
		id?: string | null;

		/** String length: inclusive between 2 and 10 */
		postalCode?: string | null;

		/** String length: inclusive between 2 and 30 */
		state?: string | null;

		/** String length: inclusive between 2 and 100 */
		street1?: string | null;

		/** String length: inclusive between 2 and 100 */
		street2?: string | null;
		type?: DemoWebApi_DemoData_Client.AddressType | null;

		/**
		 * It is a field
		 */
		location?: DemoWebApi_DemoData_Another_Client.MyPoint;
	}

	export enum AddressType { Postal, Residential }


	/**  */
	export interface BigNumbers {

		/** Type: BigInteger */
		bigInt?: string | null;

		/** Type: Int128, -170141183460469231731687303715884105728 to 170141183460469231731687303715884105727 */
		signed128?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		signed64?: string | null;

		/** Type: UInt128, 0 to 340282366920938463463374607431768211455 */
		unsigned128?: string | null;

		/** Type: ulong, 0 to 18,446,744,073,709,551,615 */
		unsigned64?: string | null;
	}

	export interface Company extends DemoWebApi_DemoData_Base_Client.Entity {

		/**
		 * BusinessNumber to be serialized as BusinessNum
		 */
		BusinessNum?: string | null;
		businessNumberType?: string | null;

		/** Data type: Date */
		foundDate?: Date | null;

		/** Type: DateOnly */
		registerDate?: Date | null;
		textMatrix?: Array<Array<string>>;
		int2D?: number[][];
		int2DJagged?: Array<Array<number>>;
		lines?: Array<string>;
	}

	export enum Days {
		Sat = 1,
		Sun = 2,
		Mon = 3,
		Tue = 4,
		Wed = 5,

		/**
		 * Thursday
		 */
		Thu = 6,
		Fri = 7
	}


	/**
	 * To test different serializations against Guid
	 */
	export interface IdMap {

		/** Type: GUID */
		id?: string | null;

		/** Type: GUID */
		idNotEmitDefaultValue?: string | null;
		nullableId?: string | null;

		/** Required */
		requiredName: string;
		text?: string | null;
	}

	export interface IntegralEntity extends DemoWebApi_DemoData_Base_Client.Entity {

		/** Type: byte, 0 to 255 */
		byte?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		int?: number | null;

		/**
		 * Type: int
		 * Range: inclusive between -1000 and 1000000
		 */
		itemCount?: number | null;

		/** Type: sbyte, -128 to 127 */
		sByte?: number | null;

		/** Type: short, -32,768 to 32,767 */
		short?: number | null;

		/** Type: uint, 0 to 4,294,967,295 */
		uInt?: number | null;

		/** Type: ushort, 0 to 65,535 */
		uShort?: number | null;
	}

	export enum MedicalContraindiationResponseTypeReason { M = "Mm", S = "Ss", P = "Pp", I = "I", A = "A" }

	export enum MedicalContraindiationResponseTypeTypeCode { P = "P", T = "Tt" }

	export interface MimsPackage {

		/**
		 * Type: int
		 * Range: inclusive between 10 and 100
		 */
		kk?: number | null;

		/**
		 * Having an initialized value in the property is not like defining a DefaultValueAttribute. Such intialization happens at run time,
		 * and there's no reliable way for a codegen to know if the value is declared by the programmer, or is actually the natural default value like 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		kK2?: number | null;
		optionalEnum?: DemoWebApi_DemoData_Client.MyEnumType | null;
		optionalInt?: number | null;
		result?: DemoWebApi_DemoData_Client.MimsResult<number>;
		tag?: string | null;
	}

	export interface MimsResult<T> {
		generatedAt?: Date | null;
		message?: string | null;
		result?: T;
		success?: boolean | null;
	}

	export enum MyEnumType { First = 1, Two = 2 }

	export interface MyGeneric<T, K, U> {
		myK?: K;
		myT?: T;
		myU?: U;
		status?: string | null;
	}

	export interface MyPeopleDic {
		anotherDic?: {[id: string]: string };
		dic?: {[id: string]: DemoWebApi_DemoData_Client.Person };
		intDic?: {[id: number]: string };
	}

	export interface Person extends DemoWebApi_DemoData_Base_Client.Entity {

		/** Data type: Date */
		baptised?: Date | null;

		/**
		 * Date of Birth.
		 * This is optional.
		 */
		dob?: Date | null;
		givenName?: string | null;
		surname?: string | null;
	}

	export interface PhoneNumber {

		/** Max length: 120 */
		fullNumber?: string | null;
		phoneType?: DemoWebApi_DemoData_Client.PhoneType | null;
	}


	/**
	 * Phone type
	 * Tel, Mobile, Skyp and Fax
	 */
	export enum PhoneType {

		/**
		 * Land line
		 */
		Tel,

		/**
		 * Mobile phone
		 */
		Mobile,
		Skype,
		Fax
	}

}

export namespace DemoWebApi_Models_Client {
	export interface AddExternalLoginBindingModel {

		/** Required */
		externalAccessToken?: string | null;
	}

	export interface ChangePasswordBindingModel {

		/** Data type: Password */
		confirmPassword?: string | null;

		/**
		 * Required
		 * String length: inclusive between 6 and 100
		 * Data type: Password
		 */
		newPassword: string;

		/**
		 * Required
		 * Data type: Password
		 */
		OldPwd: string;
	}

	export interface RegisterBindingModel {

		/** Data type: Password */
		confirmPassword?: string | null;

		/** Required */
		email?: string | null;

		/**
		 * Required
		 * String length: inclusive between 6 and 100
		 * Data type: Password
		 */
		password?: string | null;
	}

	export interface RegisterExternalBindingModel {

		/** Required */
		email?: string | null;
	}

	export interface RemoveLoginBindingModel {

		/** Required */
		loginProvider?: string | null;

		/** Required */
		providerKey?: string | null;
	}

	export interface SetPasswordBindingModel {

		/** Data type: Password */
		confirmPassword?: string | null;

		/**
		 * Required
		 * String length: inclusive between 6 and 100
		 * Data type: Password
		 */
		newPassword?: string | null;
	}


	/**
	 * Auth token
	 */
	export interface TokenResponseModel {
		access_token?: string | null;
		expires?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;
		issued?: string | null;
		token_type?: string | null;
		username?: string | null;
	}

}

export namespace Fonlow_PoemsApp_Data_Client {
	export interface Album {
		bodyType?: Fonlow_PoemsApp_Data_Client.BodyType | null;
		description?: string | null;

		/** Type: GUID */
		id?: string | null;

		/**
		 * Author should be able to alter. The default is the created time. DateTime.
		 */
		published?: Date | null;

		/**
		 * First published Url
		 */
		publishedUrl?: string | null;

		/**
		 * Album title should never be changed.
		 */
		title?: string | null;
	}

	export interface Annotation {

		/**
		 * HTML description
		 */
		description?: string | null;

		/** Type: GUID */
		id?: string | null;

		/**  */
		name?: string | null;

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url?: string | null;
	}

	export interface AnnotationBrief {

		/**
		 * Count of poems associated
		 */
		count?: number | null;

		/** Type: GUID */
		id: string;
		name: string;
	}

	export interface AnnotationPoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
	}

	export enum BodyType { Text, HTML, MD }

	export interface ExternalImageMap {
		description?: string | null;
		name?: string | null;
		poemIds?: Array<string>;
		srcUrl?: string | null;
	}


	/**
	 * For wrting or speaking.
	 * https://www.loc.gov/standards/iso639-2/php/code_list.php
	 * https://www.rfc-editor.org/rfc/rfc5646
	 * https://iso639-3.sil.org/code_tables/639/read
	 * https://iso639-3.sil.org/code_tables/download_tables
	 */
	export interface LanguageCode {

		/**
		 * iso639 code. Could be 639-3, 639-2 or 639-1
		 */
		code?: string | null;
		display?: string | null;
	}

	export interface LoginModel {
		emailAddress?: string | null;
		firstName?: string | null;
		idToken?: string | null;
		lastName?: string | null;
		name?: string | null;
		pictureUrl?: string | null;
		provider?: string | null;
		userId?: string | null;
	}

	export interface MetaData {
		key?: string | null;
		value?: string | null;
	}

	export interface MetaDataPoemCount {

		/**
		 * Count of poems associated
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Type: GUID */
		id: string;
	}


	/**
	 * Associated with a specific poem only.
	 * In case when a phase may be up to different interpretations, then used numbered annotation.
	 */
	export interface NumberedAnnotation {

		/**
		 * HTML description
		 */
		description?: string | null;

		/** Type: GUID */
		id?: string | null;

		/**
		 * Type: int
		 * Range: inclusive between 1 and 2147483647
		 */
		orderNumber: number;

		/**  */
		poemId: string;

		/**
		 * Primary URL for online description like an entry in Wikipedia
		 */
		url?: string | null;
	}

	export interface NumberedAnnotationBrief {

		/** Type: GUID */
		id: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		orderNumber: number;
	}

	export interface Picture extends Fonlow_PoemsApp_Data_Client.PictureMeta {
		content?: Array<number>;
	}

	export interface PictureMeta {
		contentType?: string | null;

		/** Max length: 512 */
		description?: string | null;

		/** Type: GUID */
		id?: string | null;

		/** Max length: 128 */
		name?: string | null;
	}

	export interface PicturePoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
		poemIds?: Array<string>;
	}

	export interface Poem {

		/**
		 * A poem may be included in multipe albums.
		 * UI may use this to present albums
		 */
		albumIds?: Array<string>;
		annotationIds?: Array<string>;
		body?: string | null;

		/**
		 * When bodytype is HTML, a redundant copy for full text search. A poor man solution.
		 */
		bodyPlain?: string | null;
		bodyType?: Fonlow_PoemsApp_Data_Client.BodyType | null;

		/**
		 * Author should be able to alter. The default is the created time.
		 */
		created?: Date | null;

		/** Type: GUID */
		id?: string | null;
		modified?: Date | null;
		numberedAnnotationBriefs?: Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotationBrief>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfStanza?: number | null;
		pictureIds?: Array<string>;

		/**
		 * to distinguish draft or published. DateTime.
		 */
		published?: Date | null;

		/**
		 * Initial published URL.
		 */
		publishedUrl?: string | null;
		ryhmesCsv?: string | null;

		/**
		 * UI use this to represent tags. This is not included n DB.
		 */
		tagIds?: Array<string>;
		title?: string | null;
	}

	export interface PoemAlbumMap {

		/** Type: GUID */
		albumId?: string | null;

		/** Type: GUID */
		poemId?: string | null;
	}

	export interface PoemAnnotationMap {

		/** Type: GUID */
		annotationId?: string | null;

		/** Type: GUID */
		poemId?: string | null;
	}

	export interface PoemBrief {
		date: Date;

		/** Type: GUID */
		id: string;
		published?: Date | null;
		tagIds?: Array<string>;
		title: string;
	}


	/**
	 * Highest level container for every poems written by a poet, for exporting to other formats
	 */
	export interface PoemCollection {
		albumMaps: Array<Fonlow_PoemsApp_Data_Client.PoemAlbumMap>;
		albums: Array<Fonlow_PoemsApp_Data_Client.Album>;
		annotationMaps: Array<Fonlow_PoemsApp_Data_Client.PoemAnnotationMap>;
		annotations: Array<Fonlow_PoemsApp_Data_Client.Annotation>;
		keyValues: Array<Fonlow_PoemsApp_Data_Client.MetaData>;
		numberedAnnotations: Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotation>;
		pictureMaps?: Array<Fonlow_PoemsApp_Data_Client.PoemPictureMap>;
		pictureMetas?: Array<Fonlow_PoemsApp_Data_Client.PictureMeta>;
		poems: Array<Fonlow_PoemsApp_Data_Client.Poem>;
		tagMaps: Array<Fonlow_PoemsApp_Data_Client.PoemTagMap>;
		tags: Array<Fonlow_PoemsApp_Data_Client.Tag>;
	}

	export interface PoemPictureMap {

		/** Type: GUID */
		pictureId?: string | null;

		/** Type: GUID */
		poemId?: string | null;
	}

	export interface PoemTagMap {

		/** Type: GUID */
		poemId?: string | null;

		/** Type: GUID */
		tagId?: string | null;
	}

	export interface Tag {

		/** Type: GUID */
		id?: string | null;
		name?: string | null;
	}

	export interface TagPoemCount extends Fonlow_PoemsApp_Data_Client.MetaDataPoemCount {
	}

}

export namespace DemoCoreWeb_Controllers_Client {
	export class SpecialTypes {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * Anonymous Dynamic of C#
		 * GET api/SpecialTypes/AnonymousDynamic
		 * @return {any} dyanmic things
		 */
		getAnonymousDynamic(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousDynamic', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Async function returing dynamic
		 * GET api/SpecialTypes/AnonymousDynamic2
		 */
		getAnonymousDynamic2(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousDynamic2', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SpecialTypes/AnonymousObject
		 */
		getAnonymousObject(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousObject', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Async function returning object
		 * GET api/SpecialTypes/AnonymousObject2
		 */
		getAnonymousObject2(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousObject2', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/SpecialTypes/AnonymousObject
		 */
		postAnonymousObject(obj?: any, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousObject', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(obj) });
		}

		/**
		 * Async returning object, Post dynamic
		 * POST api/SpecialTypes/AnonymousObject2
		 */
		postAnonymousObject2(obj?: any, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/SpecialTypes/AnonymousObject2', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(obj) });
		}
	}

}

export namespace PoemsApp_Controllers_Client {

	/**
	 * Album specific operations
	 */
	export class Albums {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * Add album. If publisheDate is not defined, it will be now.
		 * POST api/Albums
		 */
		add(album?: Fonlow_PoemsApp_Data_Client.Album | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Album> {
			return fetch(this.baseUri + 'api/Albums', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(album) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Delete along with what in poemAlbumMap.
		 * DELETE api/Albums?id={id}
		 * @param {string} id Type: GUID
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/Albums?id=' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get Album. Support ZH Convert.
		 * GET api/Albums?id={id}
		 * @param {string} id Type: GUID
		 */
		get(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Album | null> {
			return fetch(this.baseUri + 'api/Albums?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all albums. Support ZH Convert.
		 * GET api/Albums/all
		 * @param {number} timezoneOffset int in header
		 */
		getAll(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.Album>> {
			return fetch(this.baseUri + 'api/Albums/all', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all albums as dictionary. Support ZH Convert.
		 * GET api/Albums/allDic
		 * @param {number} timezoneOffset int in header
		 */
		getAllDic(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: Fonlow_PoemsApp_Data_Client.Album }> {
			return fetch(this.baseUri + 'api/Albums/allDic', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Albums
		 */
		update(album?: Fonlow_PoemsApp_Data_Client.Album | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Albums', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(album) });
		}
	}


	/**
	 * Annotations management
	 */
	export class Annotations {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * POST api/Annotations
		 * @return {string} Type: GUID
		 */
		add(annotation?: Fonlow_PoemsApp_Data_Client.Annotation | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Annotations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(annotation) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Delete along with what in poemAnnotationMap.
		 * DELETE api/Annotations?id={id}
		 * @param {string} id Type: GUID
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/Annotations?id=' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Annotations/Orphaned
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deleteOrphaned(ids?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Annotations/Orphaned', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(ids) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get annotation. Support ZH Convert.
		 * GET api/Annotations?id={id}
		 * @param {string} id Type: GUID
		 */
		get(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Annotation | null> {
			return fetch(this.baseUri + 'api/Annotations?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Annotations/all
		 */
		getAnnotationBriefs(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return fetch(this.baseUri + 'api/Annotations/all', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all annotation briefs. Support ZH Convert.
		 * GET api/Annotations/allDic
		 */
		getAnnotationBriefsDic(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: Fonlow_PoemsApp_Data_Client.AnnotationBrief }> {
			return fetch(this.baseUri + 'api/Annotations/allDic', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Annotations/Orphaned
		 */
		getOrphaned(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return fetch(this.baseUri + 'api/Annotations/Orphaned', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Annotations/PoemCountOfAnnotations
		 */
		getPoemCountOfAnnotations(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.AnnotationPoemCount>> {
			return fetch(this.baseUri + 'api/Annotations/PoemCountOfAnnotations', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Annotations
		 */
		update(annotation?: Fonlow_PoemsApp_Data_Client.Annotation | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Annotations', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(annotation) });
		}
	}


	/**
	 * Annotations management
	 */
	export class NumberedAnnotations {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * POST api/NumberedAnnotations
		 * @return {string} Type: GUID
		 */
		add(numberedAnnotation?: Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/NumberedAnnotations', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(numberedAnnotation) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Add multiple annotations
		 * POST api/NumberedAnnotations/poem/{poemId}
		 * @param {string} poemId Type: GUID
		 */
		addMuitiple(poemId?: string | null, orderNumbers?: Array<number> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.NumberedAnnotation>> {
			return fetch(this.baseUri + 'api/NumberedAnnotations/poem/' + poemId, { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(orderNumbers) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Update the orders of numbered annotations in a transaction
		 * PUT api/NumberedAnnotations/BulkOrderNumbers
		 */
		bulkUpdateOrderNumbers(idAndOrderArray?: Array<{item1: string, item2: number}> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/NumberedAnnotations/BulkOrderNumbers', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(idAndOrderArray) });
		}

		/**
		 * Delete along with what in poemNumberedAnnotationMap.
		 * DELETE api/NumberedAnnotations?id={id}
		 * @param {string} id Type: GUID
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/NumberedAnnotations?id=' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get numberedAnnotation. Support ZH Convert.
		 * GET api/NumberedAnnotations?id={id}
		 * @param {string} id Type: GUID
		 */
		get(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null> {
			return fetch(this.baseUri + 'api/NumberedAnnotations?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Update annotation
		 * PUT api/NumberedAnnotations
		 */
		update(numberedAnnotation?: Fonlow_PoemsApp_Data_Client.NumberedAnnotation | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/NumberedAnnotations', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(numberedAnnotation) });
		}

		/**
		 * Update Order Number
		 * PUT api/NumberedAnnotations/OrderNumber?id={id}&orderNumber={orderNumber}
		 * @param {string} id Type: GUID
		 * @param {number} orderNumber Type: int, -2,147,483,648 to 2,147,483,647
		 */
		updateOrderNumber(id?: string | null, orderNumber?: number | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/NumberedAnnotations/OrderNumber?id=' + id + '&orderNumber=' + orderNumber, { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}
	}


	/**
	 * Poems operations; associations with tags, albums and annotations.
	 */
	export class Poems {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * Add poem. If created is undefined, it will be now. And modified is always now.
		 * POST api/Poems
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Id of newly added
		 */
		add(poem?: Fonlow_PoemsApp_Data_Client.Poem | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem> {
			return fetch(this.baseUri + 'api/Poems', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poem) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Add new poem with existing annotations and new annotation names.
		 * PUT api/Poems/AddWithExistingAnnotations
		 * @param {{item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>}} poemAndAnnotations new poem, existing Annotation Ids, and new annotation names
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Poem Id and new annotation objects
		 */
		addWithExistingAnnotations(poemAndAnnotations?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem> {
			return fetch(this.baseUri + 'api/Poems/AddWithExistingAnnotations', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poemAndAnnotations) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Poem with Tags
		 * POST api/Poems/addWithExistingTags
		 */
		addWithExistingTags(poemAndTags?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem> {
			return fetch(this.baseUri + 'api/Poems/addWithExistingTags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poemAndTags) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Poems/AddWithNewAnnotationNames
		 */
		addWithNewAnnotationNames(poemAndAnnotations?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem> {
			return fetch(this.baseUri + 'api/Poems/AddWithNewAnnotationNames', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poemAndAnnotations) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Add new poem with existing tags, and new tag names.
		 * POST api/Poems/AddWithNewTagNames
		 * @param {{item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>}} poemAndNewTags new poem, existing Tag Ids, and new tag names
		 * @return {Fonlow_PoemsApp_Data_Client.Poem} Poem Id and new tag objects
		 */
		addWithNewTagNames(poemAndNewTags?: {item1: Fonlow_PoemsApp_Data_Client.Poem, item2: Array<string>} | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem> {
			return fetch(this.baseUri + 'api/Poems/AddWithNewTagNames', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poemAndNewTags) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Associate album with existing poems.
		 * PUT api/Poems/poemsToAlbum?albumId={albumId}
		 * @param {string} albumId Type: GUID
		 */
		associateAlbumWithPoems(albumId?: string | null, poemIds?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/poemsToAlbum?albumId=' + albumId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poemIds) });
		}

		/**
		 * Associate with existing albums.
		 * PUT api/Poems/albums?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 */
		associateWithAlbums(poemId?: string | null, albumIds?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/albums?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(albumIds) });
		}

		/**
		 * Associate with existing annotations.
		 * PUT api/Poems/existingAnnotations?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 */
		associateWithExistingAnnotations(poemId?: string | null, existingAnnotationIds?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/existingAnnotations?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(existingAnnotationIds) });
		}

		/**
		 * Associate with existing tags.
		 * PUT api/Poems/existingTags?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 */
		associateWithExistingTags(poemId?: string | null, existingTagIds?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/existingTags?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(existingTagIds) });
		}

		/**
		 * Save the new annotation, and associate with the poem.
		 * If the annotation exists, return null. Nevertheless, the client should check if the annotation had actually been in the annotation list, to avoid exceptions.
		 * PUT api/Poems/newAnnotationName?poemId={poemId}&newAnnotationName={newAnnotationName}
		 * @param {string} poemId Type: GUID
		 * @return {Fonlow_PoemsApp_Data_Client.AnnotationBrief} New annotation, or null if the annotation exists
		 */
		associateWithNewAnnotationName(poemId?: string | null, newAnnotationName?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.AnnotationBrief | null> {
			return fetch(this.baseUri + 'api/Poems/newAnnotationName?poemId=' + poemId + '&newAnnotationName=' + (!newAnnotationName ? '' : encodeURIComponent(newAnnotationName)), { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Associate poem with new tag names.
		 * PUT api/Poems/newAnnotationNames?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 * @return {Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>} New annotation objects based on newAnnotationNames
		 */
		associateWithNewAnnotationNames(poemId?: string | null, newAnnotationNames?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.AnnotationBrief>> {
			return fetch(this.baseUri + 'api/Poems/newAnnotationNames?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(newAnnotationNames) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Save the new tag, and associate with the poem.
		 * If the tag exists, return null. Nevertheless, the client should check if the tag had actually been in the tag list, to avoid exceptions.
		 * PUT api/Poems/newTagName?poemId={poemId}&newTagName={newTagName}
		 * @param {string} poemId Type: GUID
		 * @return {Fonlow_PoemsApp_Data_Client.Tag} New tag, or null if the tag exists
		 */
		associateWithNewTagName(poemId?: string | null, newTagName?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Tag | null> {
			return fetch(this.baseUri + 'api/Poems/newTagName?poemId=' + poemId + '&newTagName=' + (!newTagName ? '' : encodeURIComponent(newTagName)), { method: 'put', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Associate poem with new tag names.
		 * PUT api/Poems/newTagNames?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 * @return {Array<Fonlow_PoemsApp_Data_Client.Tag>} New tag objects based on newTagNames
		 */
		associateWithNewTagNames(poemId?: string | null, newTagNames?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return fetch(this.baseUri + 'api/Poems/newTagNames?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(newTagNames) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Reconcile among all images, poemImageMaps, and actually img local
		 * POST api/Poems/AuditAndReconcile
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		auditAndReconcile(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Poems/AuditAndReconcile', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * DELETE api/Poems/all
		 */
		clearAllTables(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/all', { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete poem, along with association with albums. However, associated tags and annotations are still in maps.
		 * DELETE api/Poems?id={id}
		 * @param {string} id Type: GUID
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/Poems?id=' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Dissociate album.
		 * DELETE api/Poems/DissociateAlbum?poemId={poemId}&albumId={albumId}
		 * @param {string} poemId Type: GUID
		 * @param {string} albumId Type: GUID
		 */
		dissociateAlbum(poemId?: string | null, albumId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/DissociateAlbum?poemId=' + poemId + '&albumId=' + albumId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Disassociate annotation.
		 * DELETE api/Poems/DissociateAnnotation?poemId={poemId}&annotationId={annotationId}
		 * @param {string} poemId Type: GUID
		 * @param {string} annotationId Type: GUID
		 */
		dissociateAnnotation(poemId?: string | null, annotationId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/DissociateAnnotation?poemId=' + poemId + '&annotationId=' + annotationId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DissociateT tag.
		 * DELETE api/Poems/DissociateTag?poemId={poemId}&tagId={tagId}
		 * @param {string} poemId Type: GUID
		 * @param {string} tagId Type: GUID
		 */
		dissociateTag(poemId?: string | null, tagId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/DissociateTag?poemId=' + poemId + '&tagId=' + tagId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fix the problem of escaped unicode string, because of the DomSanitizer of Angular. Once off solution
		 * PUT api/Poems/EscapeStringToUnicode
		 */
		escapeStringToUnicode(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/EscapeStringToUnicode', { method: 'put', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Include TagMap and AlbumMap. Support ZH Convert.
		 * GET api/Poems?id={id}
		 * @param {string} id Type: GUID
		 */
		get(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Poem | null> {
			return fetch(this.baseUri + 'api/Poems?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Img Src Url to multiple poem Ids
		 * GET api/Poems/AllNotLocalImagesOfPoems
		 */
		getAllNotLocalImagesOfPoems(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: Array<string> }> {
			return fetch(this.baseUri + 'api/Poems/AllNotLocalImagesOfPoems', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Scan all poems' HTML to create mapping from imageIds to poems. Dic of imageId to poems with img local.
		 * POST api/Poems/AssociatedPoemsOfImages
		 */
		getAssociatedPoemsOfAllImages(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: Array<Fonlow_PoemsApp_Data_Client.PoemBrief> }> {
			return fetch(this.baseUri + 'api/Poems/AssociatedPoemsOfImages', { method: 'post', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * All, OrderByDescending published. Support ZH Convert. If the user is not loggedin, not returning those not yet published.
		 * GET api/Poems/AllBriefs
		 * @param {number} timezoneOffset int in header
		 */
		getBriefsOfPoems(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return fetch(this.baseUri + 'api/Poems/AllBriefs', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * All poems of album, order by published. Support ZH Convert.
		 * GET api/Poems/GetOfAlbum?albumId={albumId}
		 * @param {string} albumId Type: GUID
		 * @param {string} convertZH string in header
		 * @param {number} timezoneOffset int in header
		 */
		getOfAlbum(albumId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.Poem>> {
			return fetch(this.baseUri + 'api/Poems/GetOfAlbum?albumId=' + albumId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/GetPoemBriefsOfAlbum?albumId={albumId}
		 * @param {string} albumId Type: GUID
		 * @param {number} timezoneOffset int in header
		 */
		getPoemBriefsOfAlbum(albumId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return fetch(this.baseUri + 'api/Poems/GetPoemBriefsOfAlbum?albumId=' + albumId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/PoemCollection
		 */
		getPoemCollection(headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.PoemCollection> {
			return fetch(this.baseUri + 'api/Poems/PoemCollection', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/PoemCollectionInOtherChineseWriting
		 */
		getPoemCollectionInOtherChineseWriting(headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.PoemCollection | null> {
			return fetch(this.baseUri + 'api/Poems/PoemCollectionInOtherChineseWriting', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/PoemCollectionPublished
		 * @param {number} timezoneOffset In request headers
		 */
		getPoemCollectionPublished(headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.PoemCollection> {
			return fetch(this.baseUri + 'api/Poems/PoemCollectionPublished', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/PoemCollectionPublishedInOtherChineseWriting
		 * @param {number} timezoneOffset timezoneOffset in headers
		 */
		getPoemCollectionPublishedInOtherChineseWriting(headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.PoemCollection | null> {
			return fetch(this.baseUri + 'api/Poems/PoemCollectionPublishedInOtherChineseWriting', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/PoemsWithInternalImageId?imageId={imageId}
		 * @param {string} imageId Type: GUID
		 */
		getPoemsWithInternalImageId(imageId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return fetch(this.baseUri + 'api/Poems/PoemsWithInternalImageId?imageId=' + imageId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Poems/TotalCountOfStanza
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		getTotalCountOfStanza(headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Poems/TotalCountOfStanza', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Poems/PoemCollection
		 */
		importPoemCollection(collection?: Fonlow_PoemsApp_Data_Client.PoemCollection | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/PoemCollection', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(collection) });
		}

		/**
		 * GET api/Poems/ByAnnotation?annotationId={annotationId}
		 * @param {string} annotationId Type: GUID
		 */
		searchByAnnotation(annotationId?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return fetch(this.baseUri + 'api/Poems/ByAnnotation?annotationId=' + annotationId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Search by keywords, separated by comma and Chinese comma. Support ZH Convert.
		 * POST api/Poems/ByKeywords
		 * @param {number} timezoneOffset int in header
		 */
		searchByKeywords(keywords?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.PoemBrief>> {
			return fetch(this.baseUri + 'api/Poems/ByKeywords', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(keywords) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Update poem.
		 * PUT api/Poems
		 */
		update(poem?: Fonlow_PoemsApp_Data_Client.Poem | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(poem) });
		}

		/**
		 * Just for maintenance, while the plaintext should be produced in the frontend.
		 * POST api/Poems/UpdatePlainTextOfHtmlPoems
		 */
		updatePlainTextOfHtmlPoems(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/UpdatePlainTextOfHtmlPoems', { method: 'post', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Poems/UpdatePublished?poemId={poemId}
		 * @param {string} poemId Type: GUID
		 */
		updatePublished(poemId?: string | null, dt?: Date | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Poems/UpdatePublished?poemId=' + poemId, { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(dt) });
		}
	}


	/**
	 * Tags management
	 */
	export class Tags {
		constructor(private baseUri: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/') {
		}

		/**
		 * POST api/Tags
		 * @return {string} Type: GUID
		 */
		add(tag?: Fonlow_PoemsApp_Data_Client.Tag | null, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'api/Tags', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tag) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Delete along with what in poemTagMap.
		 * DELETE api/Tags?id={id}
		 * @param {string} id Type: GUID
		 */
		delete(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<boolean> {
			return fetch(this.baseUri + 'api/Tags?id=' + id, { method: 'delete', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * POST api/Tags/Orphaned
		 * @return {number} Type: int, -2,147,483,648 to 2,147,483,647
		 */
		deleteOrphaned(ids?: Array<string> | null, headersHandler?: () => {[header: string]: string}): Promise<number> {
			return fetch(this.baseUri + 'api/Tags/Orphaned', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(ids) }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get tag. Support ZH Convert.
		 * GET api/Tags?id={id}
		 * @param {string} id Type: GUID
		 */
		get(id?: string | null, headersHandler?: () => {[header: string]: string}): Promise<Fonlow_PoemsApp_Data_Client.Tag | null> {
			return fetch(this.baseUri + 'api/Tags?id=' + id, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all tags. Support ZH Convert.
		 * GET api/Tags/all
		 */
		getAll(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return fetch(this.baseUri + 'api/Tags/all', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * Get all tags as dictionary. Support ZH Convert.
		 * GET api/Tags/allDic
		 */
		getAllDic(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: Fonlow_PoemsApp_Data_Client.Tag }> {
			return fetch(this.baseUri + 'api/Tags/allDic', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tags/Orphaned
		 */
		getOrphaned(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.Tag>> {
			return fetch(this.baseUri + 'api/Tags/Orphaned', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * GET api/Tags/PoemCountOfTags
		 */
		getPoemCountOfTags(headersHandler?: () => {[header: string]: string}): Promise<Array<Fonlow_PoemsApp_Data_Client.TagPoemCount>> {
			return fetch(this.baseUri + 'api/Tags/PoemCountOfTags', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => {if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;});
		}

		/**
		 * PUT api/Tags
		 */
		update(tag?: Fonlow_PoemsApp_Data_Client.Tag | null, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'api/Tags', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(tag) });
		}
	}

}

