class EventTarget {

    constructor() {
        this.listeners = {}
    }

    addEventListener(name, callback) {
        this.listeners[name]
            ? this.listeners[name].add(callback)
            : this.listeners[name] = new Set([callback])
    }

    removeEventListener(name, callback) {
        this.listeners[name]?.delete(callback);
    }

    dispatchEvent(name) {
        this.listeners[name]?.forEach(callback => callback())
    }

}

exports.EventTarget = EventTarget;

//Sample Usages
const target = new EventTarget();
const logHello = () => console.log("hello");

target.addEventListener("hello", logHello);
console.log(target.listeners);

target.removeEventListener("hello", logHello);
console.log(target.listeners);

target.addEventListener("hello2", logHello);
console.log(target.listeners);

target.dispatchEvent("hello");
target.dispatchEvent("hello2");