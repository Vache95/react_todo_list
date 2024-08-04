
type Status = 'Pending' | 'Completed' | 'Overdue' | 'Removed'


  export interface TaskModel {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    status: Status;
  }
  


 