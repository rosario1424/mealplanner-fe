import protectedInstance from "../instance/protectedInstance";

const authServices = {
    register: async (userData) => {
      try {
          const response = await protectedInstance.post("/auth/register", userData);
          return response.data;
      } catch (error) {
        return {message: error.message, status: error.
            response?.status }
      }
    }
}

export default authServices;