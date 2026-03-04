export default class subtractCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("subtract <a> <b>")
            .description("Subtract two numbers (a - b)")
            .action((a: string, b: string) => this.run(a, b));
    }
    run(a: string, b: string) {
        const na = parseFloat(a);
        const nb = parseFloat(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) {
            console.log("Please provide two valid numbers.");
            return;
        }
        console.log(na - nb);
    }
}
