"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.205.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = exports.PlaidEnvironments = void 0;
exports.PlaidEnvironments = {
    production: 'https://production.plaid.com',
    sandbox: 'https://sandbox.plaid.com',
    development: 'https://development.plaid.com',
};
class Configuration {
    constructor(param = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
        if (!this.baseOptions)
            this.baseOptions = {};
        if (!this.baseOptions.headers)
            this.baseOptions.headers = {};
        this.baseOptions.headers = Object.assign({ ['User-Agent']: `Plaid Node v12.1.0`, ['Plaid-Version']: '2020-09-14' }, this.baseOptions.headers);
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7R0FVRzs7O0FBa0JVLFFBQUEsaUJBQWlCLEdBQXFCO0lBQ2pELFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxXQUFXLEVBQUUsK0JBQStCO0NBQzdDLENBQUM7QUFFRixNQUFhLGFBQWE7SUFtRHRCLFlBQVksUUFBaUMsRUFBRTtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDNUMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sbUJBQ3RCLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEVBQ3BDLENBQUMsZUFBZSxDQUFDLEVBQUUsWUFBWSxJQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FDNUIsQ0FBQTtJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxVQUFVLENBQUMsSUFBWTtRQUMxQixNQUFNLFFBQVEsR0FBVyxJQUFJLE1BQU0sQ0FBQywrREFBK0QsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRyxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Q0FDSjtBQW5GRCxzQ0FtRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGhlIFBsYWlkIEFQSVxuICogVGhlIFBsYWlkIFJFU1QgQVBJLiBQbGVhc2Ugc2VlIGh0dHBzOi8vcGxhaWQuY29tL2RvY3MvYXBpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDIwMjAtMDktMTRfMS4yMDUuM1xuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uUGFyYW1ldGVycyB7XG4gICAgYXBpS2V5Pzogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHwgKChuYW1lOiBzdHJpbmcpID0+IHN0cmluZykgfCAoKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmc+KTtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8ICgobmFtZT86IHN0cmluZywgc2NvcGVzPzogc3RyaW5nW10pID0+IHN0cmluZykgfCAoKG5hbWU/OiBzdHJpbmcsIHNjb3Blcz86IHN0cmluZ1tdKSA9PiBQcm9taXNlPHN0cmluZz4pO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIGJhc2VPcHRpb25zPzogYW55O1xuICAgIGZvcm1EYXRhQ3Rvcj86IG5ldyAoKSA9PiBhbnk7XG59XG5cbi8vIEVkaXRlZCBieSBQbGFpZCwgbGluZXMgMTYtMjVcbmludGVyZmFjZSBQbGFpZEVudmlyb25tZW50IHtcbiAgW2Vudjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUGxhaWRFbnZpcm9ubWVudHM6IFBsYWlkRW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246ICdodHRwczovL3Byb2R1Y3Rpb24ucGxhaWQuY29tJyxcbiAgc2FuZGJveDogJ2h0dHBzOi8vc2FuZGJveC5wbGFpZC5jb20nLFxuICBkZXZlbG9wbWVudDogJ2h0dHBzOi8vZGV2ZWxvcG1lbnQucGxhaWQuY29tJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBwYXJhbWV0ZXIgZm9yIGFwaUtleSBzZWN1cml0eVxuICAgICAqIEBwYXJhbSBuYW1lIHNlY3VyaXR5IG5hbWVcbiAgICAgKiBAbWVtYmVyb2YgQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGFwaUtleT86IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB8ICgobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpIHwgKChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nPik7XG4gICAgLyoqXG4gICAgICogcGFyYW1ldGVyIGZvciBiYXNpYyBzZWN1cml0eVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHBhcmFtZXRlciBmb3IgYmFzaWMgc2VjdXJpdHlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBwYXJhbWV0ZXIgZm9yIG9hdXRoMiBzZWN1cml0eVxuICAgICAqIEBwYXJhbSBuYW1lIHNlY3VyaXR5IG5hbWVcbiAgICAgKiBAcGFyYW0gc2NvcGVzIG9hdXRoMiBzY29wZVxuICAgICAqIEBtZW1iZXJvZiBDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gfCAoKG5hbWU/OiBzdHJpbmcsIHNjb3Blcz86IHN0cmluZ1tdKSA9PiBzdHJpbmcpIHwgKChuYW1lPzogc3RyaW5nLCBzY29wZXM/OiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxzdHJpbmc+KTtcbiAgICAvKipcbiAgICAgKiBvdmVycmlkZSBiYXNlIHBhdGhcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBiYXNlUGF0aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBiYXNlIG9wdGlvbnMgZm9yIGF4aW9zIGNhbGxzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YW55fVxuICAgICAqIEBtZW1iZXJvZiBDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgYmFzZU9wdGlvbnM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIEZvcm1EYXRhIGNvbnN0cnVjdG9yIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhXG4gICAgICogcmVxdWVzdHMuIFlvdSBjYW4gaW5qZWN0IHRoaXMgaGVyZSBzbyB0aGF0IGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgdGhhdFxuICAgICAqIGRvIG5vdCBzdXBwb3J0IHRoZSBGb3JtRGF0YSBjbGFzcyBjYW4gc3RpbGwgcnVuIHRoZSBnZW5lcmF0ZWQgY2xpZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge25ldyAoKSA9PiBGb3JtRGF0YX1cbiAgICAgKi9cbiAgICBmb3JtRGF0YUN0b3I/OiBuZXcgKCkgPT4gYW55O1xuXG4gICAgY29uc3RydWN0b3IocGFyYW06IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBwYXJhbS5hcGlLZXk7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBwYXJhbS51c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhcmFtLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gcGFyYW0uYWNjZXNzVG9rZW47XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBwYXJhbS5iYXNlUGF0aDtcbiAgICAgICAgdGhpcy5iYXNlT3B0aW9ucyA9IHBhcmFtLmJhc2VPcHRpb25zO1xuICAgICAgICB0aGlzLmZvcm1EYXRhQ3RvciA9IHBhcmFtLmZvcm1EYXRhQ3RvcjtcblxuICAgICAgICBpZighdGhpcy5iYXNlT3B0aW9ucykgdGhpcy5iYXNlT3B0aW9ucyA9IHt9O1xuICAgICAgICBpZighdGhpcy5iYXNlT3B0aW9ucy5oZWFkZXJzKSB0aGlzLmJhc2VPcHRpb25zLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5iYXNlT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgIFsnVXNlci1BZ2VudCddOiBgUGxhaWQgTm9kZSB2MTIuMS4wYCxcbiAgICAgICAgICBbJ1BsYWlkLVZlcnNpb24nXTogJzIwMjAtMDktMTQnLFxuICAgICAgICAgIC4uLnRoaXMuYmFzZU9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBNSU1FIGlzIGEgSlNPTiBNSU1FLlxuICAgICAqIEpTT04gTUlNRSBleGFtcGxlczpcbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb25cbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGOFxuICAgICAqICAgQVBQTElDQVRJT04vSlNPTlxuICAgICAqICAgYXBwbGljYXRpb24vdm5kLmNvbXBhbnkranNvblxuICAgICAqIEBwYXJhbSBtaW1lIC0gTUlNRSAoTXVsdGlwdXJwb3NlIEludGVybmV0IE1haWwgRXh0ZW5zaW9ucylcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIGdpdmVuIE1JTUUgaXMgSlNPTiwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0pzb25NaW1lKG1pbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBqc29uTWltZTogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXihhcHBsaWNhdGlvblxcL2pzb258W147LyBcXHRdK1xcL1teOy8gXFx0XStbK11qc29uKVsgXFx0XSooOy4qKT8kJywgJ2knKTtcbiAgICAgICAgcmV0dXJuIG1pbWUgIT09IG51bGwgJiYgKGpzb25NaW1lLnRlc3QobWltZSkgfHwgbWltZS50b0xvd2VyQ2FzZSgpID09PSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyk7XG4gICAgfVxufVxuIl19