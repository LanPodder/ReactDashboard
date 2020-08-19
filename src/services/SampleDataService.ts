export interface SampleData{
    labels: string[],
    values: number[]
}
export class SampleDataService {
    data = {
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
        values: [0.40570, 0.96937, 0.31965, 0.94562, 0.75404, 0.18370, 0.83120, 0.47995, 0.79967, 0.26644, 0.66830, 0.98950]
    }

    constructor() {

    }

    public getData(): SampleData {
        return this.data;
    }
}