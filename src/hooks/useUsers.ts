import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { User } from "../services/user-service";
import userService from "../services/user-service";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const { cancel, request } = userService.getAll<User>();
        request.then(response => {
            setUsers(response.data);
            setLoading(false);
        })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            })

        return () => cancel();
    }, []);

    return { users, error, isLoading, setUsers, setError };
}

export default useUsers;