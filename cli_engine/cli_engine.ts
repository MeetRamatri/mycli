import { Command } from "commander";

export default class cli_engine{
    program: Command;
    constructor(){
        this.program = new Command()
    }

    registorCommand(commands:any[]){
        commands.forEach((cmdClass)=>{
            const cmdInstance = new (cmdClass as any)(this.program)
            cmdInstance.register()
        })
    }

    run(){
        this.program.parse()
    }
}