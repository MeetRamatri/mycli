export default class modulusCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("modulus <a> <b>")
            .description("Calculate a % b (modulus)")
            .action((a: string, b: string) => this.run(a, b));
    }
    run(a: string, b: string) {
        const na = Number(a);
        const nb = Number(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) {
            console.log("Please provide two valid numbers.");
            return;
        }
        if (nb === 0) {
            console.log("Modulus by zero");
            return;
        }
        console.log(na % nb);
    }
}
