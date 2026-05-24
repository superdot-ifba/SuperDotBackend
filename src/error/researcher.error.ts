class ResearcherError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class TokenExpired extends ResearcherError { }

export class SamePassword extends ResearcherError { }