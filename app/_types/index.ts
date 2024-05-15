export interface Core {
  id: string;
  serial?: string;
}

export interface Payload {
  id: string;
  name?: string;
  type?: string;
}

export interface LaunchData {
  id: string;
  success: boolean;
  failures: { reason: string }[];
  cores: { core: Core }[];
  payloads: Payload[];
  name: string;
  date_utc: string;
  links: {
    patch: {
      small: string;
    };
  };
}
