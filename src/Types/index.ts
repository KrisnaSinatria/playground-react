export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'completed';
    priority: 'low' | 'medium' | 'high';
    createdAt: Date;
}

export interface TaskFormData {
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
}

export interface TaskFilterOptions {
    status?: 'pending' | 'completed';
    priority?: 'low' | 'medium' | 'high';
    search?: string;
}

