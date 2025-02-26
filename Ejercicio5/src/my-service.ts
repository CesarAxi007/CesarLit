// src/services/auth-service.ts
import { User } from './user.ts'

class AuthService {
  private static readonly SESSION_KEY = 'user'

  login(correo: string, password: string): Promise<User> {
    // Simula la autenticación con una API o base de datos
    return new Promise((resolve, reject) => {
      if (correo === 'root@example.com' && password === 'password') {
        const user: User = { id: '1', correo }
        this.setUser(user)
        resolve(user)
      } else {
        reject(new Error('Credenciales inválidas'))
      }
    })
  }

  logout() {
    localStorage.removeItem(AuthService.SESSION_KEY)
  }

  getUser(): User | null {
    const userJson = localStorage.getItem(AuthService.SESSION_KEY)
    return userJson ? JSON.parse(userJson) : null
  }

  private setUser(user: User) {
    localStorage.setItem(AuthService.SESSION_KEY, JSON.stringify(user))
  }
}

export const authService = new AuthService();