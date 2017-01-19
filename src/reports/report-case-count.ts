export class ReportCaseCount {
    constructor(
        public count_received?: number,
        public count_awaiting_level_1_qc?: number,
        public count_awaiting_level_2_qc?: number,
        public count_awaiting_final_letter?: number,
        public count_closed?: number,
        public count_closed_no_final_letter?: number
    ) {}
}
