export class Case {
    constructor(
        public requester?: number,
        public property?: number,
        public property_string?: string,
        public case_number?: string,
        public case_reference?: string,
        public duplicate?: number,
        public status?: string,
        public request_date?: Date,
        public casefiles?: string[],
        public cbrs_unit?: number,
        public cbrs_unit_string?: string,
        public map_number?: number,
        public map_number_string?: string,
        public cbrs_map_date?: string,
        public determination?: number,
        public determination_string?: string,
        public prohibition_date?: Date,
        public prohibition_date_mdy?: string,
        public distance?: number,
        public fws_fo_received_date?: Date,
        public fws_hq_received_date?: Date,
        public final_letter_date?: Date,
        public close_date?: Date,
        public final_letter_recipient?: string,
        public analyst?: number,
        public analyst_string?: string,
        public analyst_signoff_date?: Date,
        public qc_reviewer?: number,
        public qc_reviewer_string?: string,
        public qc_reviewer_signoff_date?: Date,
        public priority?: Boolean,
        public on_hold?: Boolean,
        public invalid?: Boolean,
        public comments?: number[],
        public tags?: number[],
        public id?: number
    ) {}
}
