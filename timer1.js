const args = process.argv.slice(2);

args.forEach( (time) =>{
    alertTerminal(time);
})

function alertTerminal(time) {
    if ( !isNaN(time) && time > 0) {
        setTimeout(() => {
            process.stdout.write('\x07');
            console.log("beep at " + time);
        }, time * 1000);
    }
    
}
