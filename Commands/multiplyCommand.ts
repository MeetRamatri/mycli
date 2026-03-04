export default class multiplyCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("multiply <a> <b>")
            .description("Multiply two numbers")
            .action((a: string, b: string) => this.run(a, b));
    }
    run(a: string, b: string) {
        const na = parseFloat(a);
        const nb = parseFloat(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) {
            console.log("Please provide two valid numbers.");
            return;
        }
        console.log(na * nb);
    }
}
