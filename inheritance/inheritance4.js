

function Base() {
    this.x=10;
}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();

console.dir(obj)
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null