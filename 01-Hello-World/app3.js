let finished = false;

function timeoutHandler() {
    finished = true;
    console.log("Timeout occurred!");
}

function waitingHandler(maxTimeout, interval) {
    if ((false === finished) && (maxTimeout > 0))
    {
        console.log("...");
        setTimeout(() => waitingHandler(maxTimeout, interval), interval);
    }
}

console.log("Starting timeout...");

const maxTimeout = 2000;
const interval = 100;
setTimeout(() => waitingHandler(maxTimeout, interval), interval);
setTimeout(timeoutHandler, maxTimeout);

console.log("Timeout set for 1 second, waiting...");