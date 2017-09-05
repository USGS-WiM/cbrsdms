export class Systemmap {
    constructor(
        public map_number?: string,
        public map_title?: string,
        public map_date?: string,
        public system_units?: number[],
        public effective?: boolean,
        public id?: number
    ) {}
}
