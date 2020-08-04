export interface IPlayerData {
    id: number;
    identifiers: string[];
    name: string;
    ping: number;
}

export interface IServerData {
    enhancedHostSupport: boolean;
    icon: string;
    resources: string[];
    server: string;
    sv_licenseKeyToken: string;
    sv_maxClients: string;
    sv_scriptHookAllowed: boolean;
    vars?: string[];
    tags?: string[];
}