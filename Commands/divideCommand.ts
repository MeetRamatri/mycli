export default class divideCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("divide <a> <b>")
            .description("Divide two numbers (a / b)")
            .action((a: string, b: string) => this.run(a, b));
    }
    run(a: string, b: string) {
        const na = parseFloat(a);
        const nb = parseFloat(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) {
            console.log("Please provide two valid numbers.");
            return;
        }
        if (nb === 0) {
            console.log("Division by zero");
            return;
        }
        console.log(na / nb);
    }
}
