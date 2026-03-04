import axios from "axios";

export default class quoteCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Print a random quote")
            .action(() => this.getQuote());
    }

    async getQuote() {
        try {
            const res = await axios.get("https://api.quotable.io/random");
            const d = res.data;
            console.log(`"${d.content}" — ${d.author}`);
        } catch (err: any) {
            console.error("Error fetching quote:", err.message);
        }
    }
}
