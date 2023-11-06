import type { JWTPayload } from 'jose'

export interface AuthPayload extends JWTPayload {
  email?: string
}
