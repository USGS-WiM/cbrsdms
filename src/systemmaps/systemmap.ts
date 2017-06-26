export class Systemmap {
    constructor(
        public map_number?: string,
        public map_title?: string,
        public map_date?: Date,
        public system_units?: number[],
        public current?: boolean,
        public id?: number
    ) {}
}
