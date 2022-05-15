import { User } from "../../../user/domain/entities/User"
import { Authentication } from "../entities/Authentication"

export interface AuthenticableResponse{
  authorized: boolean,
  reason ?: string,
  token?: string
}

export interface AuthService{
  authenticate(auth: Authentication) : Promise<AuthenticableResponse>
}