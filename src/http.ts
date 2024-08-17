import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HTTP {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, token?: string) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 40000,
            headers: {
                'Authorization': `Bearer ${token || ''}`,
                'Content-Type': 'application/json',
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response: any) => response,
            (error: any) => {
                if (error.response && error.response.status === 401) {
                    // Handle unauthorized
                    this.logout();
                }
                return Promise.reject(error);
            }
        );
    }

    public async post(endpoint: string, data: FormData): Promise<AxiosResponse<any>> {
        try {
            const response = await this.axiosInstance.post(endpoint, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response;
        } catch (error: any) {
            console.error('Error making POST request:', error);
            throw error;
        }
    }

    public async put(endpoint: string, data: FormData): Promise<AxiosResponse<any>> {
        try {
            const response = await this.axiosInstance.put(endpoint, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response;
        } catch (error: any) {
            console.error('Error making PUT request:', error);
            throw error;
        }
    }

    public async get(endpoint: string): Promise<AxiosResponse<any>> {
        try {
            const response = await this.axiosInstance.get(endpoint);
            return response;
        } catch (error: any) {
            console.error('Error making GET request:', error);
            throw error;
        }
    }

    public async delete(endpoint: string): Promise<AxiosResponse<any>> {
        try {
            const response = await this.axiosInstance.delete(endpoint);
            return response;
        } catch (error: any) {
            console.error('Error making DELETE request:', error);
            throw error;
        }
    }

    private logout() {
        console.log('User logged out due to unauthorized access.');
    }
}

export default HTTP;
