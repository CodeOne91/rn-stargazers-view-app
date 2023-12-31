export interface Stargazer {
  login: string;
  avatar_url: string;
  id?: number;
  node_id?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

export interface Repository {
  owner: string;
  name: string;
}

export interface ErrorMessage {
  status: string;
  message: string;
}
