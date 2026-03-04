import axios from "axios";

export default class weatherCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("weather <location>")
            .description("Get simple weather for a location (via wttr.in)")
            .action((location: string) => this.getWeather(location));
    }

    async getWeather(location: string) {
        try {
            const loc = encodeURIComponent(location);
            const res = await axios.get(`https://wttr.in/${loc}?format=3`);
            console.log(res.data);
        } catch (err: any) {
            console.error("Error fetching weather:", err.message);
        }
    }
}
