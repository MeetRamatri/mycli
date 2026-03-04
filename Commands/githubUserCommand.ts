import axios from "axios";

export default class githubUserCommand {
    program: any;
    constructor(program: any) {
        this.program = program;
    }
    register() {
        this.program
            .command("github <username>")
            .description("Fetch GitHub user info")
            .action((username: string) => this.getUser(username));
    }

    async getUser(username: string) {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const d = res.data;
            console.log(`${d.login}${d.name ? ` — ${d.name}` : ""}`);
            console.log(`Bio: ${d.bio ?? "N/A"}`);
            console.log(`Public repos: ${d.public_repos}  Followers: ${d.followers}`);
            console.log(`URL: ${d.html_url}`);
        } catch (err: any) {
            console.error("Error fetching user:", err.response?.statusText ?? err.message);
        }
    }
}
