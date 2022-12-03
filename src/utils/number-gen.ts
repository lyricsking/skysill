import internal from "stream";

export function numberInRange(min: number=0, max: number=0) :number  {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

export function numberOfLength(length: number=0) :string {
    return Math.random().toString().substring(2, length+2);
}
