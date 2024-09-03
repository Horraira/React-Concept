import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
}

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient.get<User[]>('/users', {
            signal: controller.signal
        });
        return {
            cancel: () => controller.abort(),
            request
        }
    }

    deleteUser(id: number) {
        return apiClient.delete(`/users/${id}`);
    }

    addUser(user: User) {
        return apiClient.post<User>('/users', user);
    }

    updateUser(user: User) {
        return apiClient.patch<User>(`/users/${user.id}`, user);
    }
}

export default new UserService();