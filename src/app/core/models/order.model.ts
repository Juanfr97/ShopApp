/**
 * {
    "id": 2,
    "total": 10,
    "createdAt": "2025-08-27T16:29:12.251084",
    "user": {
      "id": 1,
      "email": "juan.frausto@gmail.com",
      "firstName": "Juan de Dios",
      "lastName": "Frausto Ramirez"
    }
  }
 */

import { User } from "./user.model";

export interface Order{
    id : number;
    total: number;
    createdAt: Date;
    user : User
}