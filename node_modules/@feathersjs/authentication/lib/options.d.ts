import { FromSchema } from '@feathersjs/schema';
export declare const defaultOptions: {
    authStrategies: string[];
    jwtOptions: {
        header: {
            typ: string;
        };
        audience: string;
        issuer: string;
        algorithm: string;
        expiresIn: string;
    };
};
export declare const authenticationSettingsSchema: {
    readonly type: "object";
    readonly required: readonly ["secret", "entity", "authStrategies"];
    readonly properties: {
        readonly secret: {
            readonly type: "string";
            readonly description: "The JWT signing secret";
        };
        readonly entity: {
            readonly oneOf: readonly [{
                readonly type: "null";
            }, {
                readonly type: "string";
            }];
            readonly description: "The name of the authentication entity (e.g. user)";
        };
        readonly entityId: {
            readonly type: "string";
            readonly description: "The name of the authentication entity id property";
        };
        readonly service: {
            readonly type: "string";
            readonly description: "The path of the entity service";
        };
        readonly authStrategies: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly description: "A list of authentication strategy names that are allowed to create JWT access tokens";
        };
        readonly parseStrategies: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly description: "A list of authentication strategy names that should parse HTTP headers for authentication information (defaults to `authStrategies`)";
        };
        readonly jwtOptions: {
            readonly type: "object";
        };
        readonly jwt: {
            readonly type: "object";
            readonly properties: {
                readonly header: {
                    readonly type: "string";
                    readonly default: "Authorization";
                    readonly description: "The HTTP header containing the JWT";
                };
                readonly schemes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "An array of schemes to support";
                };
            };
        };
        readonly local: {
            readonly type: "object";
            readonly required: readonly ["usernameField", "passwordField"];
            readonly properties: {
                readonly usernameField: {
                    readonly type: "string";
                    readonly description: "Name of the username field (e.g. `email`)";
                };
                readonly passwordField: {
                    readonly type: "string";
                    readonly description: "Name of the password field (e.g. `password`)";
                };
                readonly hashSize: {
                    readonly type: "number";
                    readonly description: "The BCrypt salt length";
                };
                readonly errorMessage: {
                    readonly type: "string";
                    readonly default: "Invalid login";
                    readonly description: "The error message to return on errors";
                };
                readonly entityUsernameField: {
                    readonly type: "string";
                    readonly description: "Name of the username field on the entity if authentication request data and entity field names are different";
                };
                readonly entityPasswordField: {
                    readonly type: "string";
                    readonly description: "Name of the password field on the entity if authentication request data and entity field names are different";
                };
            };
        };
        readonly oauth: {
            readonly type: "object";
            readonly properties: {
                readonly redirect: {
                    readonly type: "string";
                };
                readonly origins: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly defaults: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                        };
                        readonly secret: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
    };
};
export declare type AuthenticationConfiguration = FromSchema<typeof authenticationSettingsSchema>;
