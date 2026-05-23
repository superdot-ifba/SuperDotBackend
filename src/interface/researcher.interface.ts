import ISample from "./sample.interface";

export default interface IResearcher {
    _id?: string;
    personalData: {
        fullName: string;
        phone: string;
        profilePhoto?: string;
        birthDate: Date;
        countryState: string;
    };
    email: string;
    passwordHash?: string;
    role?: string;
    instituition: string;
    researchSamples?: ISample[];
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
