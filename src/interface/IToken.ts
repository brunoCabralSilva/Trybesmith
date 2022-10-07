export interface Payload {
  username: string,
  classe: string,
  level: number,
}

export interface JwtConfig {
  expiresIn: string,
  algorithm: string,
}