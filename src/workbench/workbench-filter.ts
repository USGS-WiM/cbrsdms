export class WorkbenchFilter {
    constructor(
        public status?: string,
        public case_number?: string,
        public case_reference?: string,
        public request_date_after?: Date,
        public request_date_before?: Date,
        public distance_from?: number,
        public distance_to?: number,
        public analyst?: number,
        public qc_reviewer?: number,
        public cbrs_unit?: number,
        public tags?: number[],
        public street?: string,
        public city?: string,
        public priority?: Boolean,
        public on_hold?: Boolean,
        public invalid?: Boolean,
        public id?: number
    ) {}
}
