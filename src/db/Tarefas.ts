import mongoose from 'mongoose'

export interface ITask  {
  title: string;
  relevance:string;
  completed: boolean;
  nullabeprop:null;
}

const TaskSchema = new mongoose.Schema<ITask>({
  title: { type: String, required: true },
  relevance: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.models.tarefas || mongoose.model<ITask>('tarefas', TaskSchema);
