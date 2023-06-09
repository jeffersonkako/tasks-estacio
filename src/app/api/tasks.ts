 
import dbConnect from '../../db/db';
import Task, { ITask } from '../../db/Tarefas';

dbConnect();

export default async function handler(req:any, res:any) {
  const { method } = req;
   
  switch (method) {
    case 'GET':
      try {
        const tasks: ITask[] = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
        console.log('GET OK')
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const task: ITask = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

     
    default:
      res.status(400).json({ success: false });
      break;
  }
}
