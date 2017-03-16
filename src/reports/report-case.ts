export class ReportCase {
    constructor(
        public property_string?: string,
        public case_number?: string,
        public case_reference?: string,
        public status?: string,
        public request_date?: Date,
        public cbrs_unit_string?: string,
        public determination_string?: string,
        public prohibition_date?: Date,
        public analyst_signoff_date?: Date,
        public qc_reviewer_signoff_date?: Date,
        public fws_reviewer_signoff_date?: Date,
        public final_letter_date?: Date,
        public close_date?: Date,
        public analyst_days?: number,
        public qc_reviewer_days?: number,
        public fws_reviewer_days?: number,
        public final_letter_days?: number,
        public close_days?: number,
        public id?: number
    ) {}
}
